import { studentData } from "../../data.js";
import query from "../index.js";

async function populateStudentsTable() {
  const sqlString = `INSERT INTO students (id,name,avatar,class,teacher_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;
  studentData.map(async function (data) {
    let populatedData = await query(sqlString, [
      data.id,
      data.name,
      data.avatar,
      data.class,
      data.teacher_id,
    ]);
    console.log(populatedData);
  });
}
populateStudentsTable();
