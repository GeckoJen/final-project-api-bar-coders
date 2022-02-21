import { classFeedbackData } from "../../data.js";
import query from "../index.js";

async function populateClassFeedback() {
  const sqlString = `INSERT INTO classfeedback (class, feedback_text,teacher_id) VALUES ($1,$2,$3) RETURNING *;`;
  classFeedbackData.map(async function (data) {
    let populatedData = await query(sqlString, [
      data.class,
      data.feedback_text,
      data.teacher_id,
    ]);
    console.log(populatedData);
  });
}
populateClassFeedback();
