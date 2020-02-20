const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')

const { host, port, user, pass} = require('../config/mail.json')

const  transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

transport.use('compile',hbs({
    viewEmgine:'handlebars',
    viewPath: path.resolve('./src/resurces/mail'),
    extName: '.html',
}));  


  module.exports = transport;