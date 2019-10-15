import Command from '@oclif/command';
import Listr from 'listr';

import { getChangelog } from '../utilities/changelog';

export class Changelog extends Command {
  changelog = '';

  async run(): Promise<void> {
    const tasks = new Listr([
      {
        title: 'Generate Changelog',
        task: async (): Promise<void> => {
          this.changelog = await getChangelog();
        },
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
