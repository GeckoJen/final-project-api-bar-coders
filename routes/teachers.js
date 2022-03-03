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
  getStudentSummaries,
} from "../models/teachers.js";

//gets all data needed for whole class dashboard
router.get("/class", async function (req, res, next) {
  try {
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
  } catch (err) {
    res.status(400);
    next(err);
    res.json({
      success: false,
      error: err.message,
    });
  }
});

//gets all data needed for student dashboard
router.get("/student/:id", async function (req, res, next) {
  const { id } = req.params;
  const studentWeeklyReading = await getIndividualStudentWeeklyReading(id);
  const studentWeeklyMinutes = await getStudentMinutes(id);
  const studentWeeklyPages = await getStudentPages(id);
  const studentCompletedBooks = await getStudentBooksCompleted(id);
  if (studentWeeklyReading.length > 0) {
    res.json({
      success: true,
      studentWeeklyReading: studentWeeklyReading,
      studentWeeklyMinutes: studentWeeklyMinutes,
      studentWeeklyPages: studentWeeklyPages,
      studentCompletedBooks: studentCompletedBooks,
    });
  } else {
    res.status(400);
    res.json({
      success: false,
      error: "the student id does not exist",
    });
  }
});

//sends new message to whole class
router.post("/class/feedback", async function (req, res) {
  try {
    const { feedbackText, teacherId } = req.body;
    const message = await sendClassFeedback(feedbackText, teacherId);

    res.json({
      success: true,
      payload: message,
    });
  } catch (err) {
    res.status(400);
    next(err);
    res.json({
      success: false,
      error: err.message,
    });
  }
});

//gets all messages sent to whole class
router.get("/class/feedback/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getClassFeedback(id);
  if (data.length > 0) {
    res.json({
      success: true,
      payload: data,
    });
  } else {
    res.status(400);
    res.json({
      success: false,
      error: "the teacher id does not exist",
    });
  }
});

//sends new message to student
router.post("/student/feedback", async function (req, res) {
  try {
    const { student_id, feedback_text } = req.body;
    const feedback = await sendStudentFeedback(student_id, feedback_text);
    res.json({
      success: true,
      payload: feedback,
    });
  } catch (err) {
    res.status(400);
    next(err);
    res.json({
      success: false,
      error: err.message,
    });
  }
});

//gets all messages sent to student
router.get("/student/feedback/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getStudentFeedback(id);
  if (data.length > 0) {
    res.json({
      success: true,
      payload: data,
    });
  } else {
    res.status(400);
    res.json({
      success: false,
      error: "the student id does not exist",
    });
  }
});

//gets all summaries submitted by student
router.get("/student/summaries/:id", async function (req, res) {
  const { id } = req.params;
  const data = await getStudentSummaries(id);
  if (data.length > 0) {
    res.json({
      success: true,
      payload: data,
    });
  } else {
    res.status(400);
    res.json({
      success: false,
      error: "the student id does not exist",
    });
  }
});

export default router;
