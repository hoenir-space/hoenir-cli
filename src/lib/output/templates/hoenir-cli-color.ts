import chalk from 'chalk'
import {InterfaceStrings as iStrings} from '@hoenir/core/source/resource/text/cli/InterfaceStrings'

const hoenirHeader =
  '\n' + iStrings.cLine +
  chalk.hex('#3d9dd3').visible(iStrings.hoenirBannerText) +
  iStrings.cLine

export default hoenirHeader
