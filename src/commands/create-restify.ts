
import { GluegunToolbox } from 'gluegun'


module.exports = {
  name: 'create-restify',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  },
}
