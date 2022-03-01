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
      const thisWeekData = fullArray.filter(
            (entry) => entry.weekly === weekNumber
      );
      const under4Data = thisWeekData.filter((entry) => entry.count < 4);
      const over4Data = thisWeekData.filter((entry) => entry.count >= 4);
      return {
            totalData: thisWeekData,
            under4Data: under4Data,
            over4Data: over4Data,
      };
}

export async function getClassMinutes() {
      const data = await query(`SELECT
  summaries.date_created,
    date_part('dow', summaries.date_created::date) AS daily,
      date_part('week', summaries.date_created::date) AS weekly,
      SUM(Minutes_read) AS minutes_total
  FROM summaries
  GROUP BY weekly, daily, summaries.date_created
  ORDER  BY weekly DESC`);
      const fullArray = data.rows;
      const weekNumber = fullArray[0].weekly;
      const thisWeekData = fullArray.filter(
            (entry) => entry.weekly === weekNumber
      );
      let minutesArray = [];
      for (let i = 1; i < 8; i++) {
            let day = thisWeekData.filter((entry) => entry.daily === i);
            if (day[0]) {
                  minutesArray.push({
                        day: i,
                        minutes: day[0].minutes_total,
                  });
            } else {
                  minutesArray.push({ day: i, minutes: 0 });
            }
      }
      return minutesArray;
}
