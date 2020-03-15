 export const generateConfig = () =>{
     return {
         server:"http://localhost",
         port: 8080,
         domain: 'localhost'
     }
 }
 export const generateConfigTwo = () =>{
     return {
         server:"http://localhost",
         port: 8080,
         domain: 'localhost',
         time: new Date()
     }
 }