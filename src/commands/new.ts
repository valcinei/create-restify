
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
      print: {  error },
      print: {  info }
    } = toolbox

    const name = parameters.first

    await generate({
      template: 'index.ts.ejs',
      target: `${name}/src/index.js`,
      props: { name },
    })

    await generate({
      template: 'server.ts.ejs',
      target: `${name}/src/server.js`,
      props: { name },
    })

    await generate({
      template: 'routes.ts.ejs',
      target: `${name}/src/routes.js`,
      props: { name },
    })

    await generate({
      template: 'controller.ts.ejs',
      target: `${name}/src/Http/Controllers/UserController.js`,
      props: { name },
    })

    await generate({
      template: 'model.ts.ejs',
      target: `${name}/src/Models/User.js`,
      props: { name },
    })
  
    await generate({
      template: 'package.json.ejs',
      target: `${name}/package.json`,
      props: { name },
    })
    
    info('Installing dependencies...')
    toolbox.system.run(`npm --prefix ${name} install`, { trim: true })
    .then((res)=>{
      success(res)
      success(`App ${name} generated sucess`)
      warning(`cd ${name}`)
      warning(`npm run dev`)
    })
    .catch((err)=> error(err))    
  },
}
