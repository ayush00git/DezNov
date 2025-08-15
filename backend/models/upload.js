const mongoose = require("mongoose");

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
        required: true,
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
    },
    demoLink: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true} )

const Upload = mongoose.model('uploads', uploadSchema);
module.exports = Upload;