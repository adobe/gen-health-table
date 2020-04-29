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

const genHealthTable = require('./index')
const path = require('path')

/** @private */
async function run () {
  const [,, ...args] = process.argv // destructure: grab the 3rd items on
  if (args.length < 1) {
    const message =
        'Please provide an argument: path to a .json file (array) containing scoped repo names.\n' +
        'For example, for https://github.com/adobe/aio-cli, you would just list adobe/aio-cli'
    throw new Error(message)
  }

  const jsonPath = path.resolve(args[0])
  const tableData = await genHealthTable(require(jsonPath))
  return tableData.join('\n')
}

module.exports = {
  run
}
