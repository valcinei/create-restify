
  import { GluegunToolbox } from 'gluegun'
    

module.exports = {
  name: 'new',
  alias: ['n'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: {  success },
      print: {  warning },
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
    warning(`cd ${name}`)
    warning(`npm install`)
    warning(`npm run dev`)
    
  },
}
