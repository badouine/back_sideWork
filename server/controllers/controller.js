import { request } from "express";


// get all questions
export async function getQuestions(req, res) {
    res.json("questions api get requests");
}

// insert a all questions
export async function insertQuestions(req, res) {
    res.json("questions api post requests");
}

// Delete all questions
export async function dropQuestions(req, res) {
    res.json("questions api delete requests");
}