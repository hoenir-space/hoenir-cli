import {Command, flags} from '@oclif/command'

export default class Inspect extends Command {
  static description = 'inspect file contents';

  static examples = [
    `$ hoenir inspect test.hdo
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
    const {args} = this.parse(Inspect)

    if (typeof args.file === 'undefined') {
      this.log('No file path provided!')
      return
    }

    this.log('Inspecting file: ' + args.file)
  }
}
