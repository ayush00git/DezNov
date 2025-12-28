const mongoose = require("mongoose");
const categories = ['Web Dev', 'Graphic Design', 'UI/UX', 'AI/ML', 'Blockchain and Web3', 'Open'];

const uploadSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: categories,
        default: 'Open',
    },
    tags: {
        type: [String],
        validate: {
            validator: function(v) {
                return v.length <= 4;  // max 5 tags are allowed
            },
            message: props => 'Maximum 5 tags are allowed!',
        }
    },
    githubLink: {
        type: String,
        required: false,
    },
    demoLink: {
        type: String,
        required: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
}, {timestamps: true} )

const Upload = mongoose.model('uploads', uploadSchema);
module.exports = Upload;

// add logic for profile pic