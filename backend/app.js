require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const uploadRouter = require('./routes/upload');
const profileRoute = require('./routes/profile');
const updateRouter = require('./routes/update');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDB Connected! All set to go`))
    .catch((err) => console.log(`Mongo Error: ${err}`))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/upload', uploadRouter);
app.use('/api/updates', updateRouter);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));