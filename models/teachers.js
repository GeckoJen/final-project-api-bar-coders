import query from "../db/index.js";

export async function getClassList() {
  const data = await query(`SELECT
    date_part('week', summaries.date_created::date) AS weekly,
    COUNT(DISTINCT summaries.date_created::date),
   
    students.name
FROM summaries
INNER JOIN students
ON  summaries.student_id=students.id
GROUP BY weekly, students.name
ORDER  BY weekly DESC `);
  const fullArray = data.rows;
  const weekNumber = fullArray[0].weekly;
  const thisWeekData = fullArray.filter((entry) => entry.weekly === weekNumber);
  const under4Data = thisWeekData.filter((entry) => entry.count < 4);
  const over4Data = thisWeekData.filter((entry) => entry.count >= 4);
  return { totalData: thisWeekData, under4Data: under4Data, over4Data: over4Data };
}
