const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const userRoutes = require('./routes/Trabajo');
console.log(process.env);
const port = process.env.PORT || 9000;
//middleware
app.use(express.json());
app.use('/api',userRoutes);

//routes
app.get('/',(req,res)=>{
    
});
//mongodb connection
mongoose.connect(
    process.env.MONGODB_URI
).then( () => console.log("Connected to MongoDB Atltas"))
  .catch((error) => console.error(error));  

app.listen(port, () => console.log('server listening on port',port));

