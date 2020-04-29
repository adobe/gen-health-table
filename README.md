<!-- 
run `npm run health` to generate
-->
| Module | Version | Downloads | Build Status | Coverage  | Issues | Pull Requests |
|---|---|---|---|---|---|---|
| @adobe/gen-health-table  | [![Version](https://img.shields.io/npm/v/@adobe/gen-health-table.svg)](https://npmjs.org/package/@adobe/gen-health-table)| [![Downloads/week](https://img.shields.io/npm/dw/@adobe/gen-health-table.svg)](https://npmjs.org/package/@adobe/gen-health-table)| [![Build Status](https://travis-ci.com/adobe/gen-health-table.svg?branch=master)](https://travis-ci.com/adobe/gen-health-table)| [![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/gen-health-table/master.svg?style=flat-square)](https://codecov.io/gh/adobe/gen-health-table/)| [![Github Issues](https://img.shields.io/github/issues/adobe/gen-health-table.svg)](https://github.com/adobe/gen-health-table/issues)| [![Github Pull Requests](https://img.shields.io/github/issues-pr/adobe/gen-health-table.svg)](https://github.com/adobe/gen-health-table/pulls)|

# gen-health-table

CLI utility and module to generate Markdown health tables for scoped repos.

This will generate a Markdown table for a list of Github repos, with badges for these headers:

| Module | Version | Downloads | Build Status | Coverage  | Issues | Pull Requests |
|---|---|---|---|---|---|---|

## Installation:

CLI:
`npm install -g @adobe/gen-health-table`

Dev module:
`npm install --save-dev @adobe/gen-health-table`

## CLI Usage:
```
$ gen-health-table
Please provide an argument: path to a .json file containing scoped repo names.
For example, for https://github.com/adobe/aio-cli, you would just list adobe/aio-cli
```

## Module usage:
```
const genHealth = require('@adobe/gen-health-table')

const main = async () => {
    const repos = [ 'foo/bar', 'baz' ]
    const markdownData = await genHealth(repos)
    console.log(markdownData)
}

main()
```

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
