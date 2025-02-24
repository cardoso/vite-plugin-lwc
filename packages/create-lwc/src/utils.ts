import fs from 'fs';
import path from 'path';
import { red, green } from 'kolorist';
import prompts from 'prompts';
import type { NormalizedProjectMetadata, AnswersWithMetadata, ProjectMetadata, ProjectType } from './types';

export const PROJECTS = [
    {
        name: 'Single Page App',
        color: green,
        templates: [
            {
                name: 'lwc',
                display: 'LWC',
                color: green,
            }
        ],
    },
] satisfies ProjectType[];

const TEMPLATES = PROJECTS.map((t) => (t.templates && t.templates.map((t) => t.name)) || [t.name]).reduce((a, b) => a.concat(b), []);

function isDirEmpty(path: string): boolean {
    return fs.readdirSync(path).length === 0;
}
function isValidPackageName(projectName: string): boolean {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName);
}
function toValidPackageName(projectName: string): string {
    return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/^[._]/, '')
        .replace(/[^a-z0-9-~]+/g, '-');
}
// Recursively empty the given directory
export function emptyDir(dir: string): void {
    if (!fs.existsSync(dir)) {
        return;
    }
    for (const file of fs.readdirSync(dir)) {
        const abs = path.resolve(dir, file);
        fs.rmSync(abs, { recursive: true, force: true });
    }
}
// Copy a directory or file to a new destination
export function copy(src: string, dest: string): void {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        copyDir(src, dest);
    }
    else {
        fs.copyFileSync(src, dest);
    }
}
/* istanbul ignore next */
function copyDir(srcDir: string, destDir: string) {
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir)) {
        const srcFile = path.resolve(srcDir, file);
        const destFile = path.resolve(destDir, file);
        copy(srcFile, destFile);
    }
}
export function pkgFromUserAgent(userAgent: string | undefined): {
  name: string;
  version: string;
} | undefined {
    if (!userAgent)
        return undefined;
    const pkgSpec = userAgent.split(' ')[0];
    const pkgSpecArr = pkgSpec.split('/');
    return {
        name: pkgSpecArr[0],
        version: pkgSpecArr[1],
    };
}

// Gather project information from the user in the terminal
export async function promptForAnswers(metadata: ProjectMetadata): Promise<AnswersWithMetadata> {
    const results = await prompts([
        {
            // Get the project name, used as the LWC project directory and saved as metadata.targetDir
            type: metadata.targetDir ? null : 'text',

            name: 'projectName',
            message: 'Project directory name:',
            initial: metadata.defaultProjectName,
            onState: ({ value }: { value: string }) => (metadata.targetDir = value.trim() || metadata.defaultProjectName),
        },
        {
            // If the targetDir is not empty, ask if the current contents should be deleted (i.e. overwritten)
            type: () => !fs.existsSync(metadata.targetDir!) || isDirEmpty(metadata.targetDir!)
                ? null
                : 'confirm',
            name: 'overwrite',
            message: () => (metadata.targetDir === '.'
                ? 'Current directory'
                : `Target directory "${metadata.targetDir}"`) +
                ` is not empty. Remove existing files and continue?`,
        },
        {
            // If the current contents SHOULD NOT be overwritten, throw an error and exit
            type: (_, values) => {
                if (values.overwrite === false) {
                    throw new Error(red('✖') + ' Operation cancelled');
                }
                return null;
            },
            name: 'overwriteChecker',
        },
        {
            // If the projectName/targetDir is not a valid package.json[name], prompt for a new one
            type: () => (isValidPackageName(metadata.targetDir!) ? null : 'text'),
            name: 'packageName',
            message: 'Package name (used in package.json):',
            initial: () => toValidPackageName(metadata.targetDir!),
            validate: (dir: string) => isValidPackageName(dir) || 'Invalid package.json name',
        },
        {
            // Select a project type, if the user has not passed in a "--template"
            type: metadata.template && TEMPLATES.includes(metadata.template) ? null : 'select',
            name: 'projectType',
            message: typeof metadata.template === 'string' && !TEMPLATES.includes(metadata.template)
                ? `"${metadata.template}" isn't a valid template. Please choose from below: `
                : 'Select the type of project:',
            initial: 0,
            choices: PROJECTS.map((project_type) => {
                const frameworkColor = project_type.color;
                return {
                    title: frameworkColor(project_type.name),
                    value: project_type,
                };
            }),
        },
        {
            // If the user picked a project type (i.e. "project_type") in the previous prompt, now choose a template
            type: (project_type: ProjectType) => (project_type && project_type.templates ? 'select' : null),
            name: 'template',
            message: 'Select a project template:',
            choices: (project_type: ProjectType) => project_type.templates.map((template) => {
                const templateColor = template.color;
                return {
                    title: templateColor(template.display || template.name),
                    value: template.name,
                };
            }),
        },
    ], {
        onCancel: () => {
            throw new Error(red('✖') + ' Operation cancelled');
        },
    });


    return {
        results,
        metadata: metadata as NormalizedProjectMetadata, // possible mutation of metadata in prompts
    };
}
