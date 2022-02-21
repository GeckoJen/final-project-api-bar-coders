import express from "express";
const router = express.Router();
import {
  getCurrentBooks,
  updateBook,
  newBook,
  noBook,
  completeBooks,
  dictionary,
  newWord,
  messages,
  getAllStudentsAndTeacher,
  getWholeClassSevenStat,
  getWholeClassPages,
  getWholeClassMinutes,
  getWholeClassBooksFinished,
  individualSevenStat,
  individualPages,
  individualMinutes,
  individualBooksFinished,
  classMessageLog,
  newStudentFeedback,
  studentMessageLog,
  studentSummaries,
  newClassFeedback,
} from "../models/index.js";

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });

// GET student details for homepage and log your reading page
router.get("/books/:id", async function (req, res) {
  const { id } = req.params;
  const studentData = await getCurrentBooks(id);
  res.json({
    success: true,
    payload: studentData,
  });
});

// POST for log your reading page
router.post("/summaries/:id", async function (req, res) {
  const { id } = req.params;
  const { current_page, minutes_read, summary, isComplete } = req.body;
  const updateBook = await updateBook(
    current_page,
    minutes_read,
    summary,
    isComplete,
    id
  );
  res.json({
    success: true,
    payload: updateBook,
  });
});

// POST for new book pageB

router.post("/books/", async function (req, res) {
  const { id, studentId, title, cover, author, totalPages } = req.body;
  const data = await newBook(id, studentId, title, cover, author, totalPages);
  res.json({
    success: true,
    payload: data,
  });
});

// Cant find new book

router.post("/nobook/", async function (req, res) {
  const { id: student_id } = req.params;
  const { title, author, total_pages } = req.body;
  const noBook = await noBook(student_id, title, author, total_pages);
  res.json({
    success: true,
    payload: noBook,
  });
});

// completed books

router.get("/completebooks", async function (req, res) {
  const completeBooks = await completeBooks();
  res.json({
    success: true,
    payload: completeBooks,
  });
});

// dictionary
router.get("/dictionary", async function (req, res) {
  const dictionary = await dictionary();
  res.json({
    success: true,
    payload: dictionary,
  });
});

// add to dictionary

router.post("/dictionary/", async function (req, res) {
  const { id: student_id } = req.params;
  const { word } = req.body;
  const newWord = await newWord(student_id, word);
  res.json({
    success: true,
    payload: newWord,
  });
});

// new word or old word - fetch to api - if input value api request

router.get("/messages", async function (req, res) {
  const messages = await messages();
  res.json({
    success: true,
    payload: messages,
  });
});

// teacher dashboard - whole class info

router.get("/teacherhome", async function (req, res) {
  const allStudentsAndTeacher = await getAllStudentsAndTeacher();
  const wholeClassSevenStat = await getWholeClassSevenStat();
  const wholeClassPages = await getWholeClassPages();
  const wholeClassMinutes = await getWholeClassMinutes();
  const wholeClassBooksFinished = await getWholeClassBooksFinished();
  res.json({
    success: true,
    payload: [
      allStudentsAndTeacher,
      wholeClassSevenStat,
      wholeClassPages,
      wholeClassMinutes,
      wholeClassBooksFinished,
    ],
  });
});

// teacher dashboard - individual info

router.get("/teacherstudentview", async function (req, res) {
  const individualSevenStat = await getindividualSevenStat();
  const individualPages = await getindividualPages();
  const individualMinutes = await getindividualMinutes();
  const individualBooksFinished = await getindividualBooksFinished();
  res.json({
    success: true,
    payload: [
      individualSevenStat,
      individualPages,
      individualMinutes,
      individualBooksFinished,
    ],
  });
});

// teacher dashboard - whole class MORE info

router.get("/wholeclassmoreinfo", async function (req, res) {
  const classMessageLog = await getClassMessageLog();
  res.json({
    success: true,
    payload: classMessageLog,
  });
});

router.post("/wholeclassmoreinfo/:id", async function (req, res) {
  const { feedback_text } = req.body;
  const newClassFeedback = await newClassFeedback(feedback_text);
  res.json({
    success: true,
    payload: newClassFeedback,
  });
});

router.get("/studentmoreinfo", async function (req, res) {
  const studentMessageLog = await getStudentMessageLog();
  const studentSummaries = await getStudentSummaries();
  res.json({
    success: true,
    payload: [studentMessageLog, studentSummaries],
  });
});

router.post("/studentmoreinfo", async function (req, res) {
  const { feedback_text } = req.body;
  const newStudentFeedback = await newStudentFeedback(feedback_text);
  res.json({
    success: true,
    payload: newStudentFeedback,
  });
});

export default router;
