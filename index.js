const connectDB = require('./src/db/connnect')
const express = require('express')
const app = express()
const routes = require('./src/routers/index')
require('dotenv').config()


//middleware
app.use(express.static('./public'))
app.use(express.json())

//route

app.use('/api/v1/index',routes)

const port = 3000
 
const start = async ()=>{
    try {

        await connectDB(process.env.MONGO_URL)
    }catch(error) {
        console.log(error)
    }
}
start()

app.listen(port,console.log(`the app is listening on port ${port}.....`))