import { getCommitInfo } from './getCommitInfo';

export const getDetailedCommits = async (list: string[]) => {
  return await Promise.all(list.map(commit => getCommitInfo(commit)));
};
