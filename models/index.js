// models tbc
import query from "../db/index.js";

export async function getStudentData() {
      const data = await query(
            `SELECT * FROM feedback INNER JOIN students ON students.id = feedback.student_id INNER JOIN classfeedback ON students.class = classfeedback.class WHERE students.id = 's01';`
      );
      return data.rows;
}
export async function updateBook() {}
export async function newBook() {}
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
