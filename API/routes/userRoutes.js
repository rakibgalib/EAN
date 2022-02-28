const { create } = require('combined-stream');
const { json } = require('express');
const fs = require('fs');
const path = require('path');
const jwt= require('jsonwebtoken');

const usersRoutes = (app) => {
  // VARIABLES
  const dbFile = path.resolve(__dirname, 'user.json');
  const db = fs.readFileSync(dbFile, 'utf8');

 

  app.get('/saveUser/:address', (req, res) => {
      console.log(req.params);
    const { address } = req.params;
    console.log(tokens[address]);
    res.status(200).json(tokens[address]);
  });

  app.get('/allUsers/', (req, res) => {
    res.status(200).json(tokens);
  });
  app.get('/getTest/', (req, res) => {
    res.status(200).json({"status":true});
  });

  app.post('/saveUser', (req, res) => {
      console.log(req.body);
    const { filename } = req.file;



    const {  address,time,zone,balance} = req.body;

    var jsonObj= tokens[address];
    console.log(jsonObj);
    if(jsonObj!=null){
    tokens[address].Time = time;
    tokens[address].Zone = zone;
    
    tokens[address].EthBalance=balance;


    const tokenId = address;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl + '/' + tokenId;

    res.status(200).json({ message: fullUrl });
    }
    else{
    const tokenId = address;
    console.log(tokenId);
    tokens[tokenId] = { 
        Time,
        Zone,
        EthBalance
    };

    fs.writeFileSync(dbFile, JSON.stringify(tokens));

    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl + '/' + tokenId;

    res.status(201).json({ message: fullUrl });
}

  
  });
};

module.exports = usersRoutes;

