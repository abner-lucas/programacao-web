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
  hasBaseProjectFiles: true,
  baseProjectZipUrl: 'projeto-base.zip',
  baseProjectFiles: undefined,
  submissionDeadline: undefined,
  submissionPlatformUrl: undefined,
};
