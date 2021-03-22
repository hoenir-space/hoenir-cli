/**
 * A command to inspect hoenir files.
 * @author Golos <golos@hoenir.space>
 */

import {Command, flags} from '@oclif/command'

export default class File extends Command {
  static description = 'Inspect a file\'s contents';

  static examples = [
    `$ hoenir inspect:file test.hdo
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {
      name: 'file',              // name of arg to show in help and reference with args[name]
      required: true,            // make the arg required with `required: true`
      description: 'input file', // help description
    },
  ]

  async run() {
    const {args} = this.parse(File)

    if (typeof args.file === 'undefined') {
      this.log('No file path provided!')
      return
    }

    this.log('Inspecting file: ' + args.file)
  }
}
