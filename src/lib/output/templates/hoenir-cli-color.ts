import chalk from 'chalk'
import {InterfaceStrings as iStrings} from 'hoenir-core/source/resource/text/cli/InterfaceStrings'
import version from './version-string'

const hoenirHeader =
  '\n' + iStrings.cLine + '\n' +
  chalk.hex('#3d9dd3').visible(iStrings.hoenirBannerText) +
  '\n Version: ' + version + '\n\n' + iStrings.cLine

export default hoenirHeader
