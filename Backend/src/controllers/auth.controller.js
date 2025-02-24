import { generateToken } from "../lib/utlis.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const {fullName,email,password} = req.body;
    try {
        if(!fullName || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }
        if(password.lengh < 6) {
            return res.status(400).json({ message: "Password must be at lest 6 characters"});   
        }
        const user = await User.findOne({email});

        if(user) return res.status(400).json({message: "Email Already Exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
                fullName: fullName,
                email: email,
                password: hashedPassword
            }
        )
        if(newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        }
        else {
            res.status(400).json({message: "Invalid User Data"});
        }

    } catch (error) {
        console.log("Error in signup controller ", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message: "Invalid Details"});
        }
    
        const isPassCorrect = await bcrypt.compare(password, user.password);
        if(!isPassCorrect) {
            return res.status(400).json({message: "Invalid Details"});
        }
        generateToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        })

    } catch (error) {
        console.log("Error in login controller ", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxage: 0});
        res.status(200).json({message: "Logged out succesfully"});
    } catch (error) {
        console.log("Error in login controller ", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}