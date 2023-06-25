const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://maxwel:KFhCp5Un6ePcdOad@cluster0.8kkifu3.mongodb.net/")
    
.then(function (){
    console.log('mongo connect')
})

.catch( function () {
    console.log('failed');
    
})

const logInschema = new mongoose.Schema({
   name: {
     type:String,
       required: true
   },
    
    Email: {
        type: String,
        required:true
        
    },

     password: {
        type: String,
        required:true
        
    }
});

const collection= new mongoose.model("collection1", logInschema);

module.exports = collection