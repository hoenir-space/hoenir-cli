/**
 * A command to generate an id.
 * @author Golos <golos@hoenir.space>
 */

import createIDAction from 'hoenir-core/source/action/create/ID'

import {Command, flags} from '@oclif/command'

export default class ID extends Command {
  static description = 'Returns a freshly generated id.';

  static examples = [
    `$ hoenir create:id
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const id = createIDAction.do()
    this.log(id)
  }
}
