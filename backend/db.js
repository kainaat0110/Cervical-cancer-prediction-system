
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://321kainaat0057:Kainaatz@cluster0.ztezzfr.mongodb.net/';

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected Successfully");
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectToMongo;
// Idhar tera database connection hota hai right
