const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => console.log('Mongoose connected.'));
mongoose.connection.on('error', err => console.log(`Mongoose could not connect: ${err}`));

const urlSchema = mongoose.Schema({
    original_url: String,
    short_url: Number
});

//TODO: increment short url here
urlSchema.pre('save', next => {

});

module.exports = mongoose.model('URL', urlSchema);