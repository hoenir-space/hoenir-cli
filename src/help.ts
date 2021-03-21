import cliHeader from './lib/output/templates/hoenir-cli-color'
import {Command} from '@oclif/command'

const {Help} = require('@oclif/plugin-help')

module.exports = class MyHelpClass extends Help {
  showHelp(args: string[]) {
    // eslint-disable-next-line no-console
    console.log(cliHeader)
    super.showHelp(args)
  }

  showCommandHelp(command: Command) {
    // eslint-disable-next-line no-console
    console.log(cliHeader)
    super.showHelp(command)
  }
}
