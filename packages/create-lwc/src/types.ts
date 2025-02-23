
export interface ProjectTemplate {
  name: string;
  display: string;
  color: (str: string | number) => string;
}
export interface ProjectType {
  name: string;
  color: (str: string | number) => string;
  templates: ProjectTemplate[];
}
export interface ProjectMetadata {
  targetDir?: string;
  template?: string;
  defaultProjectName: string;
}
export type NormalizedProjectMetadata = Required<ProjectMetadata>;
export interface Answers {
  overwrite: boolean;
  packageName: string;
  template: string;
}
export interface AnswersWithMetadata {
  results: Answers;
  metadata: NormalizedProjectMetadata;
}
