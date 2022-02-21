import { teacherData } from "../../data.js";
import query from "../index.js";

async function populateTeachersTable() {
  const sqlString = `INSERT INTO teachers (id,name,class) VALUES ($1,$2,$3) RETURNING *;`;
  teacherData.map(async function (data) {
    let populatedData = await query(sqlString, [
      data.id,
      data.name,
      data.class,
    ]);
    console.log(populatedData);
  });
}
populateTeachersTable();

// async function populateStudentsTable() {
//   const sqlString = `INSERT INTO students (id,name,avatar,class,teacher_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;
//   studentData.map(async function (data) {
//     let populatedData = await query(sqlString, [
//       data.id,
//       data.name,
//       data.avatar,
//       data.class,
//       data.teacher_id,
//     ]);
//     console.log(populatedData);
//   });
// }
// populateStudentsTable();

// async function populateClassFeedback() {
//   const sqlString = `INSERT INTO classfeedback (class, feedback_text,teacher_id) VALUES ($1,$2,$3) RETURNING *;`;
//   classFeedbackData.map(async function (data) {
//     let populatedData = await query(sqlString, [
//       data.class,
//       data.feedback_text,
//       data.teacher_id,
//     ]);
//     console.log(populatedData);
//   });
// }
// populateClassFeedback();

// async function populateFeedbackTable() {
//   const sqlString = `INSERT INTO feedback (student_id, feedback_text) VALUES ($1,$2) RETURNING *;`;
//   feedbackData.map(async function (data) {
//     let populatedData = await query(sqlString, [
//       data.student_id,
//       data.feedback_text,
//     ]);
//     console.log(populatedData);
//   });
// }
// populateFeedbackTable();

// async function populateDictionaryData() {
//   const sqlString = `INSERT INTO dictionary (student_id, word,definition) VALUES ($1,$2,$3) RETURNING *;`;
//   dictionaryData.map(async function (data) {
//     let populatedData = await query(sqlString, [
//       data.student_id,
//       data.word,
//       data.definition,
//     ]);
//     console.log(populatedData);
//   });
// }
// populateDictionaryData();

// async function populateAllBooksTable() {
//   const sqlString = `INSERT INTO allBooks (id, student_id, title,author,cover, total_pages) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`;
//   allBooksData.map(async function (data) {
//     let populatedData = await query(sqlString, [
//       data.id,
//       data.student_id,
//       data.title,
//       data.author,
//       data.cover,
//       data.total_pages,
//     ]);
//     console.log(populatedData);
//   });
// }
// populateAllBooksTable();

// async function populateSummariesTable() {
//   const sqlString = `INSERT INTO summaries (student_id,book_id,current_page,summary,isComplete,minutes_read) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`;
//   summaryData.map(async function (data) {
//     let populatedData = await query(sqlString, [
//       data.student_id,
//       data.book_id,
//       data.current_page,
//       data.summary,
//       data.isComplete,
//       data.minutes_read,
//     ]);
//     console.log(populatedData);
//   });
// }
// populateSummariesTable();
