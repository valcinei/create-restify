
import { GluegunToolbox } from 'gluegun'


module.exports = {
  name: 'create-restify',
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
    }).then((res)=> success("Generated index.js"))

    await generate({
      template: 'server.ts.ejs',
      target: `${name}/src/server.js`,
      props: { name },
    }).then((res)=> success("Generated server.js"))

    await generate({
      template: 'routes.ts.ejs',
      target: `${name}/src/routes.js`,
      props: { name },
    }).then((res)=> success("Generated routes.js"))

    await generate({
      template: 'controller.ts.ejs',
      target: `${name}/src/Http/Controllers/UserController.js`,
      props: { name },
    }).then((res)=> success("Generated controller"))

    await generate({
      template: 'model.ts.ejs',
      target: `${name}/src/Models/User.js`,
      props: { name },
    }).then((res)=> success("Generated model"))
  
    await generate({
      template: 'package.json.ejs',
      target: `${name}/package.json`,
      props: { name },
    }).then((res)=> success("Generated package.json"))
    
    info('Installing dependencies...')
    toolbox.system.run(`npm --prefix ${name} install`, { trim: true })
    .then((res)=>{
      success(res)
      success(`App Restify ${name} generated sucess`)
      warning(`cd ${name}`)
      warning(`npm run dev`)
    })
    .catch((err)=> error(err))    
  },
}
