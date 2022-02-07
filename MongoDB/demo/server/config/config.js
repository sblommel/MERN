const mongoose = require('mongoose');
const db_name = "ninjasdb"; //allow the name of database to change dynamically with projects


mongoose.connect(`mongodb+srv://root:root@${db_name}.qujcy.mongodb.net/ninjasdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));