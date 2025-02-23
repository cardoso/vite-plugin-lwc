#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import minimist from 'minimist';
import { emptyDir, copy, pkgFromUserAgent, promptForAnswers } from './utils.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { dim } from 'kolorist';
import type { ProjectMetadata } from './types.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
const cwd = process.cwd();
const rooDir = path.join(__dirname, '../');
const rootPkg = JSON.parse(fs.readFileSync(path.join(rooDir, `package.json`), 'utf-8'));
const LWC_VERSION = rootPkg.version;
const argv = minimist(process.argv.slice(2), { string: ['_'] });
const renameFiles = {
    _gitignore: '.gitignore',
} as Record<string, string>;
export async function init(): Promise<void> {
    console.log(dim(`create-lwc v${LWC_VERSION}`));
    const targetDir = argv._[0];
    const metadata: ProjectMetadata = {
        targetDir,
        template: argv.template || argv.t,
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
    const pkgManager = writePackageFile(projectRoot, templateDir, packageName, revisedMetadata);
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
function writePackageFile(projectRoot: string, templateDir: string, packageName: string, metadata: Required<ProjectMetadata>) {
    // modify package json name
    const pkg = JSON.parse(fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'));
    pkg.name = packageName || metadata.targetDir;
    write(projectRoot, templateDir, 'package.json', JSON.stringify(pkg, null, 2));
    const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
    const pkgManager = pkgInfo ? pkgInfo.name : 'npm';
    if (pkgManager === 'yarn') {
        // Set nodeLinker in .yarnrc.yml if yarn is the selected package manager.
        // LWC does not work when included in yarn pnp.
        write(projectRoot, templateDir, '.yarnrc.yml', 'nodeLinker: node-modules');
    }
    return pkgManager;
}
function logResult(projectRoot: string, pkgManager: string) {
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
