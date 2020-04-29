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

const index = require('../src/index')

test('success', async () => {
  let repos, tableData, markdown

  repos = []
  tableData = await index(repos)
  markdown = tableData.join('\n')
  expect(markdown).toMatchFixture('empty.md')

  repos = ['foo/bar']
  tableData = await index(repos)
  markdown = tableData.join('\n')
  expect(markdown).toMatchFixture('onerepo.md')
})

test('error', async () => {
  return expect(index()).rejects.toEqual(new Error('Repo list is not an array.'))
})
