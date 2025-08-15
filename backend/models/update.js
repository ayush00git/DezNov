const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true} );

const Update = mongoose.model('updates', updateSchema);
module.exports = Update;