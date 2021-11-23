import { execSync } from 'child_process'
import { GluegunCommand } from 'gluegun'
const cuid = require('cuid')

const command: GluegunCommand = {
  name: 'getid',
  run: async toolbox => {
    const { print } = toolbox

    const id: string = cuid()

    execSync(`echo ${id} | pbcopy`)

    print.info(`${id} copied to clipboard!`)
  }
}

module.exports = command
