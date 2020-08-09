const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

mongoose.connection.on('open', () => console.log('Mongoose connected.'));
mongoose.connection.on('error', err => console.log(`Mongoose could not connect: ${err}`));

const urlSchema = mongoose.Schema({
    original_url: String,
    short_url: Number
});

autoIncrement.initialize(mongoose.connection);
urlSchema.plugin(autoIncrement.plugin, {
    model: 'URL',
    field: 'short_url',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('shortenurl', urlSchema);