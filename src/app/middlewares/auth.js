const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: 'No token provided'});
        
    //tokin jwt   Bearer vvvvvhiguhigycuyecuiebci    
    //verificando se o token ta no formato acima 

    const parts = authHeader.split(' '); //mandando o token para um arry edividindo onde tiver espaço

    if(!parts.length === 2) //checando se o token possue duas partes 
        return res.status(401).send({ error: 'Token erro'});

    const [ scheme, token ] = parts;  //desestruturando o array  
    

    if(!/^Bearer$/i.test(scheme))//verificando se o scheme tem a palavra Bearer
        return res.status(401).send({ error: 'Token malformatted'}); 
        
    jwt.verify(token,authConfig.secret,(err,decoded) => {
        if(err) return res.status(401).send({error: 'Token invalid'}); //validando o token 

    req.userId = decoded.id;
    return next();   


    });    
    
};