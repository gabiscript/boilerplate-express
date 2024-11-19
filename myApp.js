require('dotenv').config();
const bodyParser = require('body-parser')

let express = require('express');
let app = express();
console.log('Hello World');

app.use(function middleware(req, res, next){
    console.log(req.method + ' ' + req.path + ' ' + ' - ' + req.ip);
    next()
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/public',
    express.static(__dirname + '/public')
)

app.get('/json', (req,res)=>{
    let message = 'Hello json'
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        message = message.toUpperCase()
    }
    res.json({message})
})

app.get('/now', function(req, res, next){
    req.time = new Date().toString()
    next()
}, function(req, res){
    res.json({"time": req.time})

})

app.get('/:word/echo', (req, res)=>{
    const {word} = req.params;
    res.json({echo:word})
})

app.get('/name', (req,res)=>{
    let first = req.query.first
    let last = req.query.last
    res.json({name: `${first} ${last}`})
})

app.use(bodyParser.urlencoded({extended:false}))

app.post('/name', (req, res)=>{
    let first = req.body.first
    let last = req.body.last    
    res.json({name: `${first} ${last}`})
})
 module.exports = app;
