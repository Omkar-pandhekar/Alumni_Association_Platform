import { Alumni } from "../models/alumni.model.js";

export const getAllAlumniDetails = async (req, res, next) => {
  try {
    const alumnis = await Alumni.find();

    if (alumnis) {
      return res.status(200).json(alumnis);
    }
  } catch (error) {
    return res.status(400).json({
      error: "NO alumnis found in database",
    });
  }
};
