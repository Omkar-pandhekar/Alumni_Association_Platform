// import mongoose from "mongoose";
import { Infra } from "../models/infrastructure.model.js";
export const postInfrastructure = async (req,res) => {
    const {phoneNumber,item, quantity } = req.body;

    await Infra.create({
        phoneNumber,
        item,
        quantity
    });
    res.json('One Data Created !');
}

