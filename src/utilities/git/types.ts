import { VersionBump } from '../semver/types';

export interface DetailedCommit {
  hash: string;
  message: string;
  mergeCommit?: boolean;
  versionBump?: VersionBump;
}

export type PullRequestID = number;
