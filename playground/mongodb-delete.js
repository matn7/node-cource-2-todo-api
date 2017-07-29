//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

 //  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
 //     console.log(result);
 // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteOne({_id: new ObjectID('59615dc6e0e78d16ecfedf0b')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //db.close();

});
