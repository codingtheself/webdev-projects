import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if(!username || !email || !password) {
            return res.status(401).json({
                message: 'Some Required Fields are Empty!',
                success:false,
            });
        }

        // checking if the user with same email exists
        const user = await User.findOne({email});

        if(user) {
            return res.status(401).json({
                message: 'User with this email already exists',
                success:false,
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            username,
            email,
            password:hashPassword
        });

        return res.status(201).json({
            message:'Account created successfully!',
            success:true,
        });

    } catch (error) {
        console.log(error);
    }
};