// import mongoose from "mongoose";
import { Infra } from "../models/infrastructure.model.js";
import { Fee } from "../models/fees.model.js";
export const postInfrastructure = async (req, res) => {
  const { phoneNumber, item, quantity } = req.body;

  await Infra.create({
    phoneNumber,
    item,
    quantity,
  });
  res.json("One Data Created !");
};

export const postFees = async (req, res) => {
  console.log("here");
  const { studentName, category, fees, phoneNumber } = req.body;

  // For the Testing purpose
  const userId = req.user;
  console.log(userId);
  // console.log(userId);
  console.log(req.params.id);
  // The above must be deleted

  console.log(studentName, category, fees, phoneNumber);
  await Fee.create({
    studentName,
    category,
    fees,
    phoneNumber,
  });
  res.json("One Data Created !");
};
