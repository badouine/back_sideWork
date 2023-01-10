import { request } from "express";
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";

// get all questions
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}


// insert  all questions
export async function insertQuestions(req, res) {
    try {
        Questions.insertMany({ questions: [0], answers: [1], function(err, data) {
            res.json({msg: "Data Saved Successfully ...!"})
        } })
    } catch (error) {
        res.json({ error })
    }
}

// Delete all questions
export async function dropQuestions(req, res) {
    res.json("questions api delete requests");
}

// Get all results
export async function getResults(req, res) {
    res.json("results api get results");
}

// post all results
export async function storeResults(req, res) {
    res.json("result api post results");
}

// delete all results
export async function dropResults(req, res) {
    res.json("result api delete results");
}