import Command from '@oclif/command'
import chalk from 'chalk';
import Listr from 'listr';

import { getChangelog } from '../utilities/changelog';

export class Changelog extends Command {
  changelog: string = '';

  async run() {
    const tasks = new Listr([
      {
        title: 'Generate Changelog',
        task: async () => { this.changelog = await getChangelog() },
      },
    ]);

    try {
      await tasks.run();
      console.log(this.changelog);
    } catch (error) {
      throw new Error(error);
    }
  }
}
