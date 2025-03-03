#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { emptyDir, copy, pkgFromUserAgent, promptForAnswers } from './utils.js';
import { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import { dim } from 'kolorist';
import type { ProjectMetadata } from './types.js';
import pkg from 'create-lwc/package.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));
const cwd = process.cwd();
const argv = parseArgs({args: process.argv.slice(2), allowPositionals: true, strict: true, options: { template: {type: 'string', short: 't'} }});

const renameFiles = {
    _gitignore: '.gitignore',
} as Record<string, string>;

export async function init(): Promise<void> {
    console.log(dim(`${pkg.name} v${pkg.version}`));
    const targetDir = argv.positionals[0];
    const metadata: ProjectMetadata = {
        targetDir,
        template: argv.values.template,
        defaultProjectName: !targetDir ? 'lwc-project' : targetDir,
    };
    let userFeedback;
    try {
        userFeedback = await promptForAnswers(metadata);
    }
    catch (cancelled) {
        console.log(cancelled);
        return;
    }
    const { results: { overwrite, packageName, template } } = userFeedback;
    const { metadata: revisedMetadata } = userFeedback;
    const projectRoot = path.join(cwd, revisedMetadata.targetDir);
    createRootDir(projectRoot, revisedMetadata, overwrite, template);
    const templateDir = path.join(__dirname, '../', `template-${revisedMetadata.template}`);
    writeFiles(projectRoot, templateDir);
    const pkgManager = await writePackageFile(projectRoot, templateDir, packageName, revisedMetadata);
    logResult(projectRoot, pkgManager);
}

function createRootDir(projectRoot: string, metadata: Required<ProjectMetadata>, overwrite: boolean, template: string) {
    if (overwrite) {
        emptyDir(projectRoot);
    }
    else if (!fs.existsSync(projectRoot)) {
        fs.mkdirSync(projectRoot, { recursive: true });
    }
    // determine template
    metadata.template = template || metadata.template;
    console.log(`\nScaffolding project in ${projectRoot}...`);
}

const write = (projectRoot: string, templateDir: string, file: string, content?: string) => {
    const targetPath = renameFiles[file]
        ? path.join(projectRoot, renameFiles[file])
        : path.join(projectRoot, file);
    if (content) {
        fs.writeFileSync(targetPath, content);
    }
    else {
        copy(path.join(templateDir, file), targetPath);
    }
};

function writeFiles(projectRoot: string, templateDir: string) {
    const files = fs.readdirSync(templateDir);
    for (const file of files.filter((f) => f !== 'package.json')) {
        write(projectRoot, templateDir, file);
    }
}
async function writePackageFile(projectRoot: string, templateDir: string, packageName: string, metadata: Required<ProjectMetadata>) {
    // modify package json name
    const pkg_json_dir = path.join(templateDir, `package.json`);
    const pkg_json = await fs.promises.readFile(pkg_json_dir, 'utf-8')
    const pkg: unknown = JSON.parse(pkg_json);

    if (typeof pkg !== 'object' || pkg === null) {
        throw new Error(`Failed to parse package.json`);
    }

    Object.assign(pkg, {
        name: packageName || metadata.targetDir,
    });

    write(projectRoot, templateDir, 'package.json', JSON.stringify(pkg, null, 2));

    const pkgInfo = pkgFromUserAgent(process.env['npm_config_user_agent']);
    const pkgManager = pkgInfo ? pkgInfo.name : 'npm';

    if (pkgManager === 'yarn') {
        // Set nodeLinker in .yarnrc.yml if yarn is the selected package manager.
        // LWC does not work when included in yarn pnp.
        write(projectRoot, templateDir, '.yarnrc.yml', 'nodeLinker: node-modules');
    }

    return pkgManager;
}
function logResult(projectRoot: string, pkgManager?: string) {
    console.log(`\nDone. Now run:\n`);
    if (projectRoot !== cwd) {
        console.log(`  cd ${path.relative(cwd, projectRoot)}`);
    }
    switch (pkgManager) {
        case 'yarn':
            console.log('  yarn');
            console.log('  yarn dev');
            break;
        default:
            console.log(`  ${pkgManager} install`);
            console.log(`  ${pkgManager} run dev`);
            break;
    }
    console.log();
}

init().catch((e) => {
    console.error(e);
});
