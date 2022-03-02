import createError from "http-errors";
import Router from "express-promise-router";
const router = Router();

import { getClassList, getClassMinutes, getClassPages } from "../models/teachers.js";

router.get("/", async function (req, res, next) {
      const data = await getClassList();
    const minutesReadByClass = await getClassMinutes();
    const pagesReadByClass = await getClassPages();
      res.json({
            success: true,
            totalWeeklyReading: data.totalData,
            WeeklyReadingLessThan4Times: data.under4Data,
            WeeklyReading4TimesOrMore: data.over4Data,
          minutesReadByClass: minutesReadByClass,
            pagesReadByClass: pagesReadByClass
      });
});

export default router;
