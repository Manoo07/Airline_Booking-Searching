const express = require('express');
const { PORT } = require('./config/serverConfig');

require('dotenv').config();

const setUpAndStartServer = async () =>{

    const app = express();
    // const PORT = 3000;
    app.listen(PORT,()=>{
        console.log('Server started at : ',PORT);
    });
    

}
setUpAndStartServer(); 