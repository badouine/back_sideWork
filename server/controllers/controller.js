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