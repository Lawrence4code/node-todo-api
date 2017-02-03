const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58906a2bc6cfbd37df20f081';

// console.log(ObjectID);
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid!');
// };


// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('Id not found!');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User by Id: ', user)
}).catch((e) => console.log(e));