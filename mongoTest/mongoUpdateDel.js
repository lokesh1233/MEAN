var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    
    db.collection('products', function (err, collection) {
        
        collection.update({productId: '400000796'}, { $set: { productname: 'MOTOG Plus'} }, {w:1},
                                                     function(err, result){
                                                                if(err) throw err;    
                                                                console.log('Document Updated Successfully');
                                                        });

        collection.remove({id:2}, {w:1}, function(err, result) {
        
            if(err) throw err;    
        
            console.log('Document Removed Successfully');
        });

    });
                
});