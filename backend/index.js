const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sukritp2004:bobo@cluster0.bd48bly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const db=mongoose.connection;
db.on('error', (err)=>{
    console.error("Database connection failed",err)
})
db.once('open', ()=>{
    console.log("Database connection established successfully")
})


app.get('/ping', (_req, res) => {
    res.send('Pong!');
    console.log('pong');
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

app.listen(3001, () => {
  
    console.log("Server listining on http://localhost:3001/");
    

});
