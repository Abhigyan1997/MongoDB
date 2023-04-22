const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=callback=>{

    MongoClient.connect('mongodb+srv://alokabhigyan65:Abhi1997$$@sharpenerproject.msds32f.mongodb.net/?retryWrites=true&w=majority')
    .then(client=>{
        console.log("connected");
        _db=client.db();
        callback();
    })
    .catch(err=>{
        console.log(err);
        throw err;
    })
}

const getDb=()=>{
    if(_db){
        return _db
    }
    throw 'No Database found'
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;