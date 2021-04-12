const express =require('express')
const app=express();
var bodyParser = require('body-parser')
const cors =require('cors')


const port=3001;
const db=require('./config/mongoose');
const session=require('express-session');
const mongoStore=require('connect-mongo')(session);



app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({

    name:'xtream',
    secret:'kahaniklega',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:new mongoStore(
        {
            mongooseConnection:db,
            autoRemove:'disable'
        },
        function(err)
        {
            console.log(err||'connect-mongo setup ok');
        }
    )
}));  
app.use(cors());
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`error creating server at: ${err}`);
    }
    console.log (`server running at port: ${port}`);
});