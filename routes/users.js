import express from "express";
const router = express.Router();
import {
  getCurrentBooks,
  newSummary,
  newBook,
  noBook,
  completeBooks,
  getWords,
  addWord,
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
  deleteBook,
  deleteSummary,
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
router.post("/summaries/", async function (req, res) {
  const { bookId, studentId, currentPage, summary, isComplete, minutesRead } =
    req.body;
  const updateBook = await newSummary(
    bookId,
    studentId,
    currentPage,
    summary,
    isComplete,
    minutesRead
  );
  res.json({
    success: true,
    payload: updateBook,
  });
});

router.delete("/summaries/:id", async function (req, res) {
  const { id } = req.params;
  const data = await deleteSummary(id);
  res.json({
    success: true,
    payload: data,
  });
});

// POST for new book pageB

router.post("/books/", async function (req, res) {
  const { id, studentId, title, author, cover, totalPages } = req.body;
  const data = await newBook(id, studentId, title, author, cover, totalPages);
  res.json({
    success: true,
    payload: data,
  });
});

// for the backenders

router.delete("/books/:id", async function (req, res) {
  const { id } = req.params;
  const data = await deleteBook(id);
  res.json({
    success: true,
    payload: data,
  });
});

// Cant find new book // needs to be changed

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
router.get("/dictionary/:id", async function (req, res) {
  const { id } = req.params;
  const dictionary = await getWords(id);
  res.json({
    success: true,
    payload: dictionary,
  });
});

// add to dictionary

router.post("/dictionary", async function (req, res) {
  const { studentId, word, definition } = req.body;
  const newWord = await addWord(studentId, word, definition);
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
