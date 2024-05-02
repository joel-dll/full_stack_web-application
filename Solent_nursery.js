
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a schema in mongoose
const Solent_nurserySchema = new Schema({
    ChildName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    ParentContact: {
        type: Number,
        required: true
    },
    Allergies: {
        type: String,
        required: true
    },
    SpecialNotes: {
        type: String,
        required: true
    },
}, {timestamps: true});

//creating a model in mongoose
const Sale = mongoose.model('Solent_nursery', Solent_nurserySchema);//this must match with name in your MongoDB

// export the model so that it can be used in the programme
module.exports = Solent_nursery;
