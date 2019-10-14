import { exec, SHELL_EXEC_RETURN_ARRAY } from '../shell';
import { getDetailedCommits } from './getDetailedCommits';

export const getHistorySinceTag = async (tag: string) => {
  const list = exec(`git log --oneline ${tag}..HEAD`, SHELL_EXEC_RETURN_ARRAY) as string[];

  return getDetailedCommits(list);
};
