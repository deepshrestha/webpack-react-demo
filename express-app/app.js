const express = require("express")
const cors = require("cors")
const app = express()

const customerRouter = require("./router/customerRouter")

app.use(cors())

app.use('/api', customerRouter)

app.listen(3000, err => {
    if(err)
        throw new Error(err)
    console.log("Server is running on port 3000!")
})