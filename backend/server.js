const express = require("express");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 8000;

// app.use(cors({
//     origin: "http://localhost:5173"
// }))

app.get('/', (req, res) => {
    return res.redirect("http://localhost:5173");
    // return res.send("EH")
})

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));