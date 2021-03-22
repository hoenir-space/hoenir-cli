hoenir-cli
==========

The command line interface for the Hœnir framework.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hoenir-cli.svg)](https://npmjs.org/package/hoenir-cli)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/hoenir-space/hoenir-cli?branch=master&svg=true)](https://ci.appveyor.com/project/hoenir-space/hoenir-cli/branch/master)
[![Codecov](https://codecov.io/gh/hoenir-space/hoenir-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/hoenir-space/hoenir-cli)
[![Downloads/week](https://img.shields.io/npm/dw/hoenir-cli.svg)](https://npmjs.org/package/hoenir-cli)
[![License](https://img.shields.io/npm/l/hoenir-cli.svg)](https://github.com/hoenir-space/hoenir-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @hoenir/cli
$ hoenir COMMAND
running command...
$ hoenir (-v|--version|version)
hoenir-cli/0.0.1 darwin-x64 node-v14.15.1
$ hoenir --help [COMMAND]
USAGE
  $ hoenir COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hoenir hello [FILE]`](#hoenir-hello-file)
* [`hoenir help [COMMAND]`](#hoenir-help-command)

## `hoenir hello [FILE]`

describe the command here

```
USAGE
  $ hoenir hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hoenir hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hoenir-space/hoenir-cli/blob/v0.0.1/src/commands/hello.ts)_

## `hoenir help [COMMAND]`

display help for hoenir

```
USAGE
  $ hoenir help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
