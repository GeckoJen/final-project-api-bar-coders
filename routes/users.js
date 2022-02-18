import express from "express";
const router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });

// GET student details for homepage and log your reading page
router.get("/homepage", async function (req, res) {
      const studentData = await getStudentData();
      res.json({
            success: true,
            payload: studentData,
      });
});

// POST for log your reading page
router.post("/readingpage", async function (req, res) {
      const { current_page, minutes_read, summary, isComplete } = req.body;
      const updateBook = await updateBook(
            current_page,
            minutes_read,
            summary,
            isComplete
      );
      res.json({
            success: true,
            payload: updateBook,
      });
});

// POST for new book pageB

router.post("/newbook", async function (req, res) {
      const { student_id, title, cover, author, total_pages } = req.body;
      const newBook = await newBook(
            student_id,
            title,
            cover,
            author,
            total_pages
      );
      res.json({
            success: true,
            payload: newBook,
      });
});

export default router;
