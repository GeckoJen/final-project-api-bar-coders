import { feedbackData } from "../../data.js";
import query from "../index.js";

async function populateFeedbackTable() {
  const sqlString = `INSERT INTO feedback (student_id, feedback_text) VALUES ($1,$2) RETURNING *;`;
  feedbackData.map(async function (data) {
    let populatedData = await query(sqlString, [
      data.student_id,
      data.feedback_text,
    ]);
    console.log(populatedData);
  });
}
populateFeedbackTable();
