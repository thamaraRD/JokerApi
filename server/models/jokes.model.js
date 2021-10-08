const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [ true, 'setup is required' ],
        minlength: [ 3, 'setup must be at least 3 characters' ],
    },
    punchline: {
        type: String,
        required: [ true, 'punchline is required' ],
        minlength: [ 3, 'punchline must be at least 3 characters' ],
    },
},
    { timestamps: true }
);

const Jokes = mongoose.model('Jokes', JokesSchema);
JokesSchema.plugin(uniqueValidator);
module.exports = Jokes;