require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors());

if (!process.env.MONGODB_URI) {
    console.error("MongoDB URI is not defined in .env file");
    process.exit(1); // Exit the process or handle the error accordingly
}
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connection established successfully"))
.catch(err => {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit the process or handle the error accordingly
});



app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/`);
});