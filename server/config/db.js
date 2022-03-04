
let  DB_CONNECTION = "mongodb+srv://dbadmin:gratia0119@clusters002.yh611.mongodb.net/comp229002"

//Database Setup
let mongoose = require('mongoose');

module.exports = function(){
     //Connect to the DB
     mongoose.connect(DB_CONNECTION);

     let mongoDB = mongoose.connection;

         mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
         mongoDB.once('open', ()=>{
            console.log('Connected to MongoDB...');
})
return mongoDB;

}

module.exports = 
{
    "URI": "mongodb+srv://dbadmin:gratia0119@clusters002.yh611.mongodb.net/test?authSource=admin&replicaSet=atlas-o9wpde-shard-0&readPreference=primary&appname=MongoDB+Compass&ssl=true",
    "Secret" : 'SomeSecret'

}
//protocol, user, password, address
