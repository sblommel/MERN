const mongoose = require('mongoose'); //connection to database
const db_name = "Jokes"; //allow the name of database to change dynamically with projects. I am using cluster0 as main

//connect to specific database
mongoose.connect(`mongodb+srv://root:root@cluster0.v6qw5.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));