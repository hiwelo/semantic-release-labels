semantic-release-labels
=======================

Facilitate the release of NPM package following semantic versioning, based on GitHub Pull Requests labels

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/semantic-release-labels.svg)](https://npmjs.org/package/semantic-release-labels)
[![CircleCI](https://circleci.com/gh/hiwelo/semantic-release-labels/tree/master.svg?style=shield)](https://circleci.com/gh/hiwelo/semantic-release-labels/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/semantic-release-labels.svg)](https://npmjs.org/package/semantic-release-labels)
[![License](https://img.shields.io/npm/l/semantic-release-labels.svg)](https://github.com/hiwelo/semantic-release-labels/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g semantic-release-labels
$ semver-labels COMMAND
running command...
$ semver-labels (-v|--version|version)
semantic-release-labels/0.0.0 darwin-x64 node-v12.10.0
$ semver-labels --help [COMMAND]
USAGE
  $ semver-labels COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`semver-labels hello [FILE]`](#semver-labels-hello-file)
* [`semver-labels help [COMMAND]`](#semver-labels-help-command)

## `semver-labels hello [FILE]`

describe the command here

```
USAGE
  $ semver-labels hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ semver-labels hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hiwelo/semantic-release-labels/blob/v0.0.0/src/commands/hello.ts)_

## `semver-labels help [COMMAND]`

display help for semver-labels

```
USAGE
  $ semver-labels help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
