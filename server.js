const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {getConvidado,setConvidado, deleteConvidado} = require('./util')

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true }))

app.get('/', getConvidado);

app.get('/convidar', (req,res)=>{
    res.render('cadastro');
});

app.post('/novoconvidado', (req,res)=>{
    setConvidado(req.body);
    res.redirect('/');
});

app.delete('/removerconvidado', (req,res)=>{
    deleteConvidado(req.body.id);
    res.redirect('/');
});

app.listen(4000,()=>{
    console.log('SERVER ATIVO: http://localhost:4000');
});