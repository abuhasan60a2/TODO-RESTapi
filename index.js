const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config({path:'./.env'})
const DB = process.env.DATABASE_URL.replace('<password>',process.env.DB_PASSWORD)
const PORT= process.env.PORT || 3000
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})
app.listen(PORT,()=>{
    console.log('Server is running on port 3000')
})