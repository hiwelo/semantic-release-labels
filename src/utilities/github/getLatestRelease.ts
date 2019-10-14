import { getOctokit, GitHubContext } from './getOctokit';

export const getLatestRelease = async () => {
  const { data } = await getOctokit().repos.getLatestRelease({
    ...GitHubContext,
  });

  return data;
};
