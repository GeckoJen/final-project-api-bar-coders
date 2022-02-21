import { allBooksData } from "../../data.js";
import query from "../index.js";

async function populateAllBooksTable() {
  const sqlString = `INSERT INTO allBooks (id, student_id, title,author,cover, total_pages) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`;
  allBooksData.map(async function (data) {
    let populatedData = await query(sqlString, [
      data.id,
      data.student_id,
      data.title,
      data.author,
      data.cover,
      data.total_pages,
    ]);
    console.log(populatedData);
  });
}
populateAllBooksTable();
