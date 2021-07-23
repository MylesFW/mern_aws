const mongoose = require("mongoose")

module.exports = (db_name) => {
    mongoose
        .connect(`mongodb://localhost/5000`, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log(`Successfully connected to ${db_name}`);
        })
        .catch((error) => {
            console.log(`mongoose connection to ${db_name} has failed:`, error)
        })
    }
