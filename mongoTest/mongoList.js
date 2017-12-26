var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    
    db.collection('products', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
        });
        
    });
    db.close();
                
});