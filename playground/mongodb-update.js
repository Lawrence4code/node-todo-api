// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to database server.');
    }

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID ('58900b74620ab17f154bd992')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID ('588f84fdb55bb879a23b8016')
    }, {
        $set: {
            name: 'Jenn'
        },
        $inc: {
            age: 1
        }
    },
        {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // db.close();
});