
// ____________________________________________________________________________________________________________
// ______________________________________Osama Rabea Dakrory__________________________________________________
// ____________________________________________________________________________________________________________

const app = require('./app')
const http = require('http')
const config = require('./config/index')
const server = http.createServer(app)




server.listen(config.PORT,()=>{
    console.log(`Server running on http://localhost:${config.PORT}`);
});