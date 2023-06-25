var express = require('express');
var router = express.Router();
const app = express();
const path = require('path');
const viewsPath = path.join(__dirname, '../views')
const collection = require ("./mongodb")

/* login */
app.use(express.json());
app.set("view engine", " ejs");
app.set("views", viewsPath);
app.use(express.urlencoded({extended: false}));

app.get("/",function (req, res){
    res.render("/login");
});

app.get("/cadastro", function (req, res){
    res.render("/cadastro");
});

app.post("/cadastro", async function (req, res){
    const data = {
        name: req.body.name,
        email: req.body.email,
        senha: req.body.password,
    };

    await collection.insertMany([data]);
    
    res.render("/index")
});


app.post("/login", async function (req, res){
     
    try{
   const check = await collection.findOne({name:req.body.name})
        if(check.password === req.body.password){
            
            res.render("/index")
        }

    else{
        res.send("senha invalida")
    };
        
    }
    
    catch{
   res.send("cadastro não encontrado, por favor revise os dados.");
}
    
    
    res.render("/login")
});

app.listen(3100, function () {
    console.log("ligado");
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/frutas', function(req, res, next) {
  res.render('frutas');
});

router.get('/usuarios', function(req, res, next) {
  res.render('usuarios');
});

router.get('/espadas', function(req, res, next) {
  res.render('espadas');
});

router.get('/teoria', function(req, res, next) {
  res.render('teoria');
});

router.get('/haki', function(req, res, next) {
  res.render('haki');
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro');
});

module.exports = router;

