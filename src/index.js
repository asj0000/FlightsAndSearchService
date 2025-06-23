const express = require( 'express');
const dotenv = require( 'dotenv')
const bodyParser = require('body-parser');
dotenv.config();

const { PORT } = require('../src/config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = ()=>{
    // object of express
    const app = express();
    
    app.use( bodyParser.json());
    app.use( bodyParser.urlencoded({ extended :  true }));

    app.listen( PORT , ()=>{
        console.log(`server is running on ${PORT} port`)
        console.log(process.env.PORT )
        const cityRepoObj = new CityRepository();
        cityRepoObj.createCity({ name: 'New Delhi'});
    })
}

setupAndStartServer();