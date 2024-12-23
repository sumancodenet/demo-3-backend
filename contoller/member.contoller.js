import { apiResponseErr, apiResponseSuccess } from "../helper/serverError.js"
import { statusCode } from "../helper/statusCode.js"
import { v4 as uuidv4 } from "uuid"
import member from "../models/createMember.models.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv"


dotenv.config();

export const memberCreate = async (req, res) => {
    try {
        const { userName, password, email } = req.body;

        const finduser = await member.findOne({where : { email }});
        if(finduser)
        {
            return res.status(statusCode.badRequest).json(apiResponseErr(null, false, statusCode.badRequest, "Email already exists!"));
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newuser = await member.create({
            userId: uuidv4(),
            userName: userName,
            password: hashPassword,
            email: email,
        });
        return res.status(statusCode.create).json(apiResponseSuccess(newuser, true, statusCode.create, "User insert successfully"));
    } catch (error) {
        return res.status(statusCode.internalServerError).json(apiResponseErr(null, false, statusCode.internalServerError, `Something went wrong!${error}`));
    }
}

export const memberUpdate = async (req, res) => {

    try {
        const findEmail = { email } = req.body;
        if(findEmail)
        {
            return res.status(statusCode.badRequest).json(apiResponseErr(null, false, statusCode.badRequest, "Email already successfully"));
        }
        
        





    } catch (error) {

        
    }
}
