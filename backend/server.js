const express = require('express');
const cors = require('cors');
const connectDatabase = require("./connect/db")

const authRoutes = require('./routes/auth');
const formRoutes = require('./routes/formRoutes');


const app = express();
require("dotenv").config()



// Middleware
app.use(cors());
app.use(express.json());



// Use routes
app.use('/auth', authRoutes);
app.use('/form', formRoutes);

app.use("*", (req, res) => {
  res.send({message: "Wrong end-point"})
})



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(` ✅ Server is running on port ${PORT}`)
    try {
        connectDatabase()
        console.log("Db Connected  ✅")

    } catch (err) {
        console.log(err.message)
    }

})