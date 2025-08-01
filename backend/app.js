require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors({
    origin: "http://localhost:5173"
}));

app.use('/', userRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));