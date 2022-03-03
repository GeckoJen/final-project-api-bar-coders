import createError from "http-errors";
import Router from "express-promise-router";
const router = Router();
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
      getStudentName,
} from "../models/index.js";


// GET student details for homepage and log your reading page
router.get("/books/:id", async function (req, res, next) {
      const { id } = req.params;
      const bookData = await getCurrentBooks(id);
      const progressData = await getProgress(id);
      const studentName = await getStudentName(id);
      if (bookData.length > 0) {
            res.json({
                  success: true,
                  progressData: progressData,
                  bookData: bookData,
                  name: studentName
            });
      } else {
            res.status(400);
            res.json({
                  success: false,
                  error: "the student id does not exist",
            });
      }
});

// POST for log your reading page
router.post("/summaries", async function (req, res, next) {
      try {
            const {
                  bookId,
                  studentId,
                  currentPage,
                  summary,
                  isComplete,
                  minutesRead,
                  pagesRead,
            } = req.body;
            const updateBook = await newSummary(
                  bookId,
                  studentId,
                  currentPage,
                  summary,
                  isComplete,
                  minutesRead,
                  pagesRead
            );
            res.json({
                  success: true,
                  payload: updateBook,
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

// POST for new book pageB

router.post("/books", async function (req, res, next) {
      try {
            const { id, studentId, title, author, cover, totalPages } =
                  req.body;
            const data = await newBook(
                  id,
                  studentId,
                  title,
                  author,
                  cover,
                  totalPages
            );
            res.json({
                  success: true,
                  payload: data,
            });
      } catch (err) {
            next(err);
            res.status(400);
            res.json({
                  success: false,
                  error: err.message,
            });
      }
});

// completed books

router.get("/completedbooks/:id", async function (req, res, next) {
      const { id } = req.params;
      const completeBooks = await getCompleteBooks(id);
      if (completeBooks.length > 0) {
            res.json({
                  success: true,
                  payload: completeBooks,
            });
      } else {
            res.status(400);
            res.json({
                  success: false,
                  error: "the student id does not exist",
            });
      }
});

// dictionary
router.get("/dictionary/:id", async function (req, res) {
      const { id } = req.params;
      const dictionary = await getWords(id);
      if (dictionary.length > 0) {
            res.json({
                  success: true,
                  payload: dictionary,
            });
      } else {
            res.status(400);
            res.json({
                  success: false,
                  error: "the student id does not exist",
            });
      }
});

// add to dictionary

router.post("/dictionary", async function (req, res, next) {
      try {
            const { studentId, word, definition } = req.body;
            const newWord = await addWord(studentId, word);
            if (typeof word === "string") {
                  res.json({
                        success: true,
                        payload: newWord,
                  });
            } else {
                  res.status(400);
                  res.json({
                        success: false,
                        message: `"word" must only have letters`,
                  });
            }
      } catch (err) {
            next(err);
            res.status(400);
            res.json({
                  success: false,
                  error: err.message,
            });
      }
});

// new word or old word - fetch to api - if input value api request

router.get("/feedback/:id", async function (req, res) {
      try {
            const { id } = req.params;
            const studentFeedBack = await getStudentFeedback(id);
            const classFeedback = await getClassFeedback();
            res.json({
                  success: true,
                  classFeedback: classFeedback,
                  studentFeedBack: studentFeedBack,
            });
      } catch (err) {
            next(err);
            res.status(400);
            res.json({
                  success: false,
                  error: err.message,
            });
      }
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
