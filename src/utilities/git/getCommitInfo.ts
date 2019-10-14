import { getPRFromMergeCommit } from './getPRFromMergeCommit';
import { DetailedCommit } from './types';
import { getVersionBumpForPR, SEMVER_BUMP_OTHER } from '../semver';
import { VersionBump } from '../semver/types';

export const getCommitInfo = async (commitMessage: string): Promise<DetailedCommit> => {
  const [hash, ...content] = commitMessage.split(' ');
  const message = content.join(' ');
  const mergeCommit = message.includes('Merge pull request');
  const pullRequest = getPRFromMergeCommit(message) as number;
  const versionBump = pullRequest ? await getVersionBumpForPR(pullRequest) : SEMVER_BUMP_OTHER;

  return {
    hash,
    message,
    mergeCommit,
    versionBump,
  };
};
