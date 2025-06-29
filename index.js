const express = require("express")

const app = express()
const PORT = process.env.PORT || 8001


app.get('/', (req, res) => {
    return res.send("Hello from the nodejs server")
})

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))