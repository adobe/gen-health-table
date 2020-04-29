/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Generates a Markdown row of the health table
 *
 * @param {string} pkName the package name
 * @returns {string} the generated Markdown table row
 */
function genRow (pkName) {
  return `| @${pkName}  ` +
         `| [![Version](https://img.shields.io/npm/v/@${pkName}.svg)](https://npmjs.org/package/@${pkName})` +
         `| [![Downloads/week](https://img.shields.io/npm/dw/@${pkName}.svg)](https://npmjs.org/package/@${pkName})` +
         `| [![Build Status](https://travis-ci.com/${pkName}.svg?branch=master)](https://travis-ci.com/${pkName})` +
         `| [![Codecov Coverage](https://img.shields.io/codecov/c/github/${pkName}/master.svg?style=flat-square)](https://codecov.io/gh/${pkName}/)` +
         `| [![Github Issues](https://img.shields.io/github/issues/${pkName}.svg)](https://github.com/${pkName}/issues)` +
         `| [![Github Pull Requests](https://img.shields.io/github/issues-pr/${pkName}.svg)](https://github.com/${pkName}/pulls)|`
}

const TABLE_HEADER = [
  '| Module | Version | Downloads | Build Status | Coverage  | Issues | Pull Requests |',
  '|---|---|---|---|---|---|---|'
]

module.exports = async function (jsonArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(jsonArray)) {
      reject(new Error('Repo list is not an array.'))
    }

    const tableData = [...TABLE_HEADER]
    jsonArray.forEach(item => { tableData.push(genRow(item)) })

    resolve(tableData)
  })
}
