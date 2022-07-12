const express = require('express')
const app = express()
const port = process.env.PORT || 3023
const routes = require('./src/routes/app')
const db = require('./src/db/db')
// Middileware

app.use(express.urlencoded({
    extended:true,
}))
app.use(express.json())
routes(app)
const start = async (req, res) => {
    try {
        await db.connect()
   
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
        }
    catch (err) {

    }
}
start()