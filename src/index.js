const express = require( 'express');
const dotenv = require( 'dotenv')
const bodyParser = require('body-parser');
dotenv.config();

const db = require('./models/index');
const { PORT } = require('../src/config/serverConfig');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = ()=>{
    // object of express
    const app = express();
    
    app.use( bodyParser.json());
    app.use( bodyParser.urlencoded({ extended :  true }));

    app.use('/api', ApiRoutes);

    app.listen( PORT , ()=>{
        console.log(`server is running on ${PORT} port`)
        console.log(process.env.PORT )
        if( process.env.SYNC_DB){
            db.sequelize.sync({alter : true})        
        }
    })
}

setupAndStartServer();