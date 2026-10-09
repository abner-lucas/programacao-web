// Central configuration for the assignment guide.
// Teachers can customize deadlines, submission links, or provide the base project files here.

export interface BaseProjectFile {
  filename: string;
  label: string;
  content: string;
}

export interface AssignmentConfig {
  hasBaseProjectFiles: boolean;
  baseProjectZipUrl?: string;
  baseProjectFiles?: BaseProjectFile[];
  submissionDeadline?: string;
  submissionPlatformUrl?: string;
}

export const assignmentConfig: AssignmentConfig = {
  // If base files are not provided in the prompt/workspace, follow prompt instruction:
  // "Se nenhum arquivo-base tiver sido fornecido, oculte downloads e códigos e exiba:
  // 'O projeto-base será disponibilizado pelo professor.'"
  hasBaseProjectFiles: false,
  baseProjectZipUrl: undefined,
  baseProjectFiles: undefined,
  submissionDeadline: undefined,
  submissionPlatformUrl: undefined,
};
