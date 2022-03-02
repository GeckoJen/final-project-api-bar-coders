import createError from "http-errors";
import Router from "express-promise-router";
const router = Router();

import {
      getClassList,
      getClassMinutes,
      getClassPages,
      getClassBooksCompleted,
      getIndividualStudentWeeklyReading,
} from "../models/teachers.js";

router.get("/class", async function (req, res, next) {
      const data = await getClassList();
      const minutesReadByClass = await getClassMinutes();
      const pagesReadByClass = await getClassPages();
      const booksCompletedByClass = await getClassBooksCompleted();
      res.json({
            success: true,
            barChartData: data.totalData,
            classListLessThan4Times: data.under4Data,
            classList4TimesOrMore: data.over4Data,
            minutesReadByClass: minutesReadByClass,
            pagesReadByClass: pagesReadByClass,
            booksCompletedByClass: booksCompletedByClass,
      });
});

router.get("/student/:id", async function (req, res, next) {
      const { id } = req.params;
      const studentWeeklyReading = await getIndividualStudentWeeklyReading(id);
      res.json({
            success: true,
            studentWeeklyReading: studentWeeklyReading,
      });
});

export default router;
