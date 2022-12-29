const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    series: String,
    episode: String,
    license: String,
    description: String,
    brand: String,
    clip: String,
    tags: String,
})

packageSchema.index({
    series: 'text',
    episode: 'text',
    license: 'text',
    description: 'text',
    brand: 'text',
    clip: 'text',
    tags: 'text',
});

module.exports = mongoose.model('Package', packageSchema)


// Package.find()