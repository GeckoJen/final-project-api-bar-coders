import express from "express";
const router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });

// GET student details for homepage
router.get("/", async function (req, res) {
      const studentData = await getStudentData();
      res.json({
            success: true,
            payload: studentData,
      });
});

export default router;
