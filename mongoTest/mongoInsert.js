var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    
    db.collection('products', function (err, collection) {
        
        collection.insert({productname: 'LYF Black', productId: '400000790' });
        collection.insert({productname: 'LYF White', productId: '400000791' });
        collection.insert({productname: 'Samsung mobile', productId: '400000792' });
        
        

        db.collection('products').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});