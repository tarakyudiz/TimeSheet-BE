const express  = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const routes = require('./routes')

dotenv.config()
const port = process.env.PORT ?? 3006
require('./db/mongoose')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routes)
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})