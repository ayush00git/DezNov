require("dotenv").config();
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDb connected`))
    .catch((err) => console.log(`Mongo Error: ${err.message}`))

app.use(cors({
    origin: "http://localhost:5173"
}));

app.get('/', (req, res) => {
    return res.status(200).json({"msg": "Server is running fine"})
})

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));