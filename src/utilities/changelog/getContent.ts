import { CHANGELOG_CATEGORIES } from './constants';
import { SortedCommitList } from './types';
import { VersionBump } from '../semver/types';

export const getContent = (list: SortedCommitList): string => {
  const content: string[] = [];
  const categories = Object.keys(CHANGELOG_CATEGORIES) as VersionBump[];

  categories.forEach(category => {
    if (!list[category].length) return;

    content.push(`#### ${CHANGELOG_CATEGORIES[category]}`);

    list[category].forEach(commit => {
      content.push(`[${commit.hash}] ${commit.message}`);
    });
  });

  return content.join('\n\n');
};
