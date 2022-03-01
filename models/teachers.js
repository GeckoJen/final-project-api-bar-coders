import query from "../db/index.js";


export async function getClassList() {
  const data = await query(`SELECT
    date_part('week', summaries.date_created::date) AS weekly,
    COUNT(DISTINCT summaries.date_created::date),
    SUM(Minutes_read) AS minutes_total,
    students.name
FROM summaries
INNER JOIN students
ON  summaries.student_id=students.id
GROUP BY weekly, students.name
ORDER  BY weekly DESC `);
  return data.rows;
}