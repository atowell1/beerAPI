const express = require("express")
const app = express() //app is the tool use to 
const beerRouter = require("./routes/beerRouter")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))

app.use("/beers", beerRouter)

app.use("/", (req, res) => { //configure middleware to run
    // console.log("Something hit me!")
    res.send(`<h1>Welcome to the beer API</h1>`)
})

mongoose.connect("mongodb://localhost:27017/beers", {
    useNewUrlParser: true
})
mongoose.connection.on("connected", () => {
    console.log(`Connected to the beers database!`)
})

mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to beers databse:\n${err}`)
})

const port = process.env.PORT || 4444  

app.listen(port, () => {
    console.log(`Listening on port ${port}...`) //backticks do something special with the ${port}
})
