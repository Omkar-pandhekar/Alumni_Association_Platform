import { Student } from "../models/student.model.js";

export const getAllStudentDetails = async (req, res, next) => {
  try {
    const students = await Student.find();

    if (students) {
      return res.status(200).json(students);
    }
  } catch (error) {
    return res.status(400).json({
      error: "NO Students found in database",
    });
  }
};
