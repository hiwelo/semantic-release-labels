import Octokit from '@octokit/rest';

import { OctokitContext, OctokitStore } from './types';

/**
 * Constants for this file only
 */
const STORE: OctokitStore = {
  octokit: undefined,
  owner: undefined,
  repo: undefined,
};

const OctokitConfig = {
  auth: process.env.GH_TOKEN,
};

export const setupContext = (() => {
  STORE.owner = process.env.PROJECT_OWNER;
  STORE.repo = process.env.PROJECT_REPO;

  if (STORE.owner === undefined) throw new Error('PROJECT_OWNER environment variable needed');
  if (STORE.repo === undefined) throw new Error('PROJECT_REPO environment variable needed');
})();

export const GitHubContext: OctokitContext = { owner: STORE.owner, repo: STORE.repo };

export const getOctokit = () => {
  if (STORE.octokit === undefined) STORE.octokit = new Octokit({ ...OctokitConfig });

  return STORE.octokit;
};

