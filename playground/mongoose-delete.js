const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndDelete({_id: '5ba478bd0ede333858dcb460'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndDelete('5ba478bd0ede333858dcb460').then((todo) => {
  console.log(todo);
});
