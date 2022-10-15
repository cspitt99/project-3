const mongoose = require('mongoose')
require("dotenv").config()
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://root:Password1234@cluster0.7oi1h5z.mongodb.net/project3_db?retryWrites=true&w=majority'
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;