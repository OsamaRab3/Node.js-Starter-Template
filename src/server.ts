
// ____________________________________________________________________________________________________________
// ______________________________________Osama Rabea Dakrory__________________________________________________
// ____________________________________________________________________________________________________________

import app from "./app";
import * as http from 'http'
import config from "./config";



const server = http.createServer(app);
const PORT = config.PORT; 


server.listen(PORT,()=>{
    console.log("server run on: ",PORT);
})

