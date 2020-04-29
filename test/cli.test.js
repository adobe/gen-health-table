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

const { run } = require('../src/cli')
const path = require('path')

test('success', async () => {
  const jsonFilePath = path.join(__dirname, '__fixtures', 'example.json')
  process.argv = ['node', 'cli', jsonFilePath]
  return expect(run()).resolves.toMatchFixture('example.txt')
})

test('error', async () => {
  process.argv = ['node', 'cli'] // no json file
  return expect(run).rejects.toEqual(
    new Error('Please provide an argument: path to a .json file (array) containing scoped repo names.\nFor example, for https://github.com/adobe/aio-cli, you would just list adobe/aio-cli'))
})
