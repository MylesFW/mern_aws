const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema ({
        name: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },
        type: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },
        skill1: {
            type: String,
            default: "",
        },
        skill2: {
            type: String,
            default: "",
        },
        skill3: {
            type: String,
            default: "",
        },
        likes: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

// this is what connects the schema to mongoose and provides the name to the collection
const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;