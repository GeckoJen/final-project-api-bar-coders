// models tbc
import query from "../db/index.js";

export async function getCurrentBooks(id) {
  const data = await query(
    `SELECT * from allbooks INNER JOIN summaries on allbooks.id = summaries.book_id WHERE allbooks.student_id = $1 AND summaries.iscomplete = false`,
    [id]
  );
  return data.rows;
}
export async function updateBook() {}
export async function newBook(id, studentId, title, author, cover, totalPages) {
  const data = await query(
    `INSERT INTO allbooks (id, student_id, title,author,cover, total_pages) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [id, studentId, title, author, cover, totalPages]
  );
}
export async function noBook() {}
export async function completeBooks() {}
export async function dictionary() {}
export async function newWord() {}
export async function messages() {}
export async function getAllStudentsAndTeacher() {}
export async function getWholeClassSevenStat() {}
export async function getWholeClassPages() {}
export async function getWholeClassMinutes() {}
export async function getWholeClassBooksFinished() {}
export async function individualSevenStat() {}
export async function individualPages() {}
export async function individualMinutes() {}
export async function individualBooksFinished() {}
export async function classMessageLog() {}
export async function newStudentFeedback() {}
export async function studentMessageLog() {}
export async function studentSummaries() {}
export async function newClassFeedback() {}
