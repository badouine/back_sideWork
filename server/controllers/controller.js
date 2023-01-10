import { request } from "express";
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

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
        Questions.insertMany({ questions, answers }, function(err, data) {
            res.json({msg: "Data Saved Successfully ...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}

// Delete all questions
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions deleted successfully"})
    }catch(error) {
        res.json({ error })
    }
}

// Get all results
export async function getResults(req, res) {
    try {
        const r = await Results.find()
        res.json(r)
    }catch (error) {
    res.json( {error} )
    }
}

// post all results
export async function storeResults(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
            if(!username && !result) throw new Error('Data not provided');

        Results.create({ username, result, attempts, points, achived }, function(err, data) {
            res.json({ msg: "result saved successfully"})
        })
    }catch (error) {
        res.json( {error} )
    }
}

// delete all results
export async function dropResults(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "result deleted successfully"})
    } catch (error) {
        res.json( {error} )
    }
}