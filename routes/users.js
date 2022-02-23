import express from "express";
const router = express.Router();
import {
  getCurrentBooks,
  getProgress,
  newSummary,
  newBook,
  getCompleteBooks,
  getWords,
  addWord,
  getStudentFeedback,
  getClassFeedback,
} from "../models/index.js";

// GET student details for homepage and log your reading page
router.get("/books/:id", async function (req, res) {
  const { id } = req.params;
  const bookData = await getCurrentBooks(id);
  const progressData = await getProgress(id);
  res.json({
    success: true,
    progressData: progressData,
    bookData: bookData,
  });
});

// POST for log your reading page
router.post("/summaries", async function (req, res) {
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

// POST for new book pageB

router.post("/books", async function (req, res) {
  const { id, studentId, title, author, cover, totalPages } = req.body;
  const data = await newBook(id, studentId, title, author, cover, totalPages);
  res.json({
    success: true,
    payload: data,
  });
});

// completed books

router.get("/completedbooks/:id", async function (req, res) {
  const { id } = req.params;
  const completeBooks = await getCompleteBooks(id);
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

router.get("/feedback/:id", async function (req, res) {
  const { id } = req.params;
  const studentFeedBack = await getStudentFeedback(id);
  const classFeedback = await getClassFeedback();
  res.json({
    success: true,
    classFeedback: classFeedback,
    studentFeedBack: studentFeedBack,
  });
});

// for the backenders

router.delete("/summaries/:id", async function (req, res) {
  const { id } = req.params;
  const data = await deleteSummary(id);
  res.json({
    success: true,
    payload: data,
  });
});

router.delete("/books/:id", async function (req, res) {
  const { id } = req.params;
  const data = await deleteBook(id);
  res.json({
    success: true,
    payload: data,
  });
});

export default router;
