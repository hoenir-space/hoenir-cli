/**
 * A command to generate an id.
 * @author Golos <golos@hoenir.space>
 */

import createBasicKeyAction from '@hoenir/core/source/action/create/BasicKey'

import {Command, flags} from '@oclif/command'

export default class BasicKey extends Command {
  static description = 'Puts a new key pair into the current directory.';

  static examples = [
    `$ hoenir create:id
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    createBasicKeyAction.do('')
  }
}
