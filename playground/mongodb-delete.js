// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to database server.');
    }

    console.log('Connected to MongoDB server.');

    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOne and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Lawrence The Developer'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("589008b9620ab17f154bd817")
    // }, (err) => {
    //     console.log('Unable to find the requested data ID.');
    // }).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID ('58901821620ab17f154bdc9a')
    }).then((result) =>{
        console.log(result);
    }, (err) => {
        console.log('Unable to find the requested ID', err);
    });
});