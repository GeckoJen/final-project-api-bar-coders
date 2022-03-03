import createError from "http-errors";
import Router from "express-promise-router";
const router = Router();

import {
      getClassList,
      getClassMinutes,
      getClassPages,
      getClassBooksCompleted,
      getIndividualStudentWeeklyReading,
      getStudentMinutes,
      getStudentPages,
      getStudentBooksCompleted,
      sendClassFeedback,
      getClassFeedback,
      sendStudentFeedback,
      getStudentFeedback,
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
      const studentWeeklyMinutes = await getStudentMinutes(id);
      const studentWeeklyPages = await getStudentPages(id);
      const studentCompletedBooks = await getStudentBooksCompleted(id);
      res.json({
            success: true,
            studentWeeklyReading: studentWeeklyReading,
            studentWeeklyMinutes: studentWeeklyMinutes,
            studentWeeklyPages: studentWeeklyPages,
            studentCompletedBooks: studentCompletedBooks,
      });
});

router.post("/class/feedback", async function (req, res) {
      const { feedbackText, teacherId } = req.body;
      const message = await sendClassFeedback(feedbackText, teacherId);
      res.json({
            success: true,
            payload: message,
      });
});

router.get("/class/feedback/:id", async function (req, res) {
      const { id } = req.params;
      const data = await getClassFeedback(id);
      res.json({
            success: true,
            payload: data,
      });
});

router.post("/student/feedback", async function (req, res) {
      const { student_id, feedback_text } = req.body;
      const feedback = await sendStudentFeedback(student_id, feedback_text);
      res.json({
            success: true,
            payload: feedback,
      });
});

router.get("/student/feedback/:id", async function (req, res) {
      const { id } = req.params;
      const data = await getStudentFeedback(id);
      res.json({
            success: true,
            payload: data,
      });
});

export default router;
