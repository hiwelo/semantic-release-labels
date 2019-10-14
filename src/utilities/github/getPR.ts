import Octokit from '@octokit/rest';

import { getOctokit, GitHubContext } from './getOctokit';
import { PullRequestID } from '../git/types';

export const getPR = async (pr: PullRequestID): Promise<Octokit.PullsGetResponse> => {
  try {
    const { data } = await getOctokit().pulls.get({
      ...GitHubContext,
      pull_number: pr,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
