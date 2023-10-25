const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyparser = require('body-parser');

require('dotenv').config();

const setUpAndStartServer = async () =>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    // const PORT = 3000;
    app.listen(PORT,()=>{
        console.log('Server started at : ',PORT);
    });
    

}
setUpAndStartServer(); 