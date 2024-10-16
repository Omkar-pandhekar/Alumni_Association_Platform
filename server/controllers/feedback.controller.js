import { feed } from "../models/feedback.model.js";

export const submitFeedback = async (req,res) => {
    const {fullname,email,feedback} = req.body;
    await feed.create({
        fullname,
        email,
        feedback
    });

    res.json('submit')
}