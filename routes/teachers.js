import createError from "http-errors";
import Router from "express-promise-router";
const router = Router();

import { getClassList } from '../models/teachers.js'

router.get("/", async function (req, res, next) {
  const data = await getClassList();
  
 
    res.json({
      success: true,
      data: data,
      
    });
  
});


export default router;
