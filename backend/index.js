const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

const userSchema =new  mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const User = new mongoose.model("User", userSchema);

app.post('/Login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user already exists
        const findUser = await User.findOne({ email: email });
        if (findUser) {
            if (password === findUser.password) {
                res.send({ message: "Login Successfull", data: findUser });
            } else {
                res.send({ message: "Password incorrect" });
            }
        } else {
            return res.send({ message: "User not registered" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.post('/Register', async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.send({ message: "User already registered" });
        }

        // Create and save a new user
        const user = new User({ name, email, password });
        await user.save();
        res.send({ message: "Successfully Registered" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
