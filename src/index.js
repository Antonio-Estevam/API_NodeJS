const express = require ('express');
const  bodyParser = require('body-parser');
const app = express();
const PORTA = 3333; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res) =>{
  res.send("ok")
});

require('./controllers/authController')(app);

app.listen(PORTA,() =>{
    console.log(`\n Servidor rodando na porta: ${PORTA} http://localhost:${PORTA}/\n`);
    
});
