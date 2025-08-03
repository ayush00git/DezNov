require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(`MongoDB Connected! All set to go`))
.catch((err) => console.log(`Mongo Error: ${err}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: "http://localhost:5173"
}));

app.use('/', userRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));