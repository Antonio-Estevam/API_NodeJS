const express = require ('express');
const  bodyParser = require('body-parser');
const app = express();
const PORTA = 3333; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require("./app/controllers/index")(app);

app.listen(PORTA,() =>{
    console.log(`\n Servidor rodando na porta: ${PORTA} http://localhost:${PORTA}/\n`);
    
});
