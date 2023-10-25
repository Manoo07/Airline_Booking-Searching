const express = require('express');


const setUpAndStartServer = async () =>{

    const app = express();
    const PORT = 3000;
    app.listen(PORT,()=>{
        console.log('Server started at : ',PORT);
    });
    

}
setUpAndStartServer(); 