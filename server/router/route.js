import {  Router } from "express";
import * as controller from '../controllers/controller.js'
const router = Router();

/** Question Routes */
router.route('/questions')
    .get(controller.getQuestions)   // 
    .get(controller.insertQuestions)
    .delete(controller.dropQuestions)


export default router;