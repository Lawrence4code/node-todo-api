console.log('Starting server.js file.');

var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    todo.save().then((doc)=> {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) =>{
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// app.get('/todos/:id', (req, res) => {
//     var id = req.params.id;
//     if(ObjectID.isValid(id)) {
//         User.findById(id).then((todo) => {
//             if(!todo) {
//                 return res.status(400).send('Unable to find the resquested ID')         *** this code worked as well/ just little jumbled as compared to below
//             }
//             res.status(200).send(todo.id);            
//         })
//     } else {
//         return res.status(404).send('Invalid Id.');
//     }
// });

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid id');
    }

    Todo.findById(id).then((todo) =>{
        if(!todo) {
    return res.status(404).send('Unable to find the requested id');                     // Re write this code in promises using then
        }
        res.status(200).send({todo});
    }).catch((e) => {
        res.status(400).send('Unable to find the requested ID');
    })
})


app.listen(3000, () =>{
    console.log('Started on port 3000');
});

module.exports = {app};