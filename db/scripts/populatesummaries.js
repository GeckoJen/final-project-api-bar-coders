import { summaryData } from "../../data.js";
import query from "../index.js";

async function populateSummariesTable() {
  const sqlString = `INSERT INTO summaries (student_id,book_id,current_page,summary,isComplete,minutes_read,number_pages,) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;`;
  summaryData.map(async function (data) {
    let populatedData = await query(sqlString, [
      data.student_id,
      data.book_id,

      data.current_page,
      data.summary,
      data.isComplete,
      data.minutes_read,
      data.number_pages,
    ]);
    console.log(populatedData);
  });
}
populateSummariesTable();
