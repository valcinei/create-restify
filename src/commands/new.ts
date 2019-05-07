
  import { GluegunToolbox } from 'gluegun'
    

module.exports = {
  name: 'new',
  alias: ['w'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: {  success },
    } = toolbox

    const name = parameters.first

    await generate({
      template: 'server.ts.ejs',
      target: `${name}/src/index.js`,
      props: { name },
    })

    await generate({
      template: 'package.json.ejs',
      target: `${name}/package.json`,
      props: { name },
    })

    success(`App ${name} generated sucess`)
  },
}
