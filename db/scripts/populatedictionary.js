import { dictionaryData } from "../../data.js";
import query from "../index.js";

async function populateDictionaryData() {
  const sqlString = `INSERT INTO dictionary (student_id, word,definition) VALUES ($1,$2,$3) RETURNING *;`;
  dictionaryData.map(async function (data) {
    let populatedData = await query(sqlString, [
      data.student_id,
      data.word,
      data.definition,
    ]);
    console.log(populatedData);
  });
}
populateDictionaryData();
