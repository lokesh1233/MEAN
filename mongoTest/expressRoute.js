var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient;

app.get('/', function (req, res) {

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    
    db.collection('products', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items); 
            //res.send('Hello World!')
            res.send(items)         
            console.log('Hello World2!')  
        });
        
    });
    db.close();
                
});

  //res.send('Hello World!')
})

app.listen(3000, function(){ console.log('Example app listening on port 3000!') } )