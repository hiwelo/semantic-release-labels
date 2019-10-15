import Octokit from '@octokit/rest';

import { getOctokit, GitHubContext } from './getOctokit';

export const getCommit = async (hash: string): Promise<Octokit.GitGetCommitResponse> => {
  try {
    const { data } = await getOctokit().git.getCommit({
      ...GitHubContext,
      commit_sha: hash,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
