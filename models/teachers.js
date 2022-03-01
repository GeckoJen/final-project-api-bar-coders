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
    
function getSundayFromWeekNum (weekNum, year) {
  const sunday = new Date(year, 0, 1 + (weekNum) * 7);
  while (sunday.getDay() !== 0) {
    sunday.setDate(sunday.getDate() - 1);
  }
  return sunday;
};

let sunday = getSundayFromWeekNum(weekNumber, new Date().getFullYear());

    console.log(getSundayFromWeekNum(10, 2021));

      let minutesArray = [];
      for (let i = 1; i < 7; i++) {
          let day = thisWeekData.filter((entry) => entry.daily === i);
          var ms = new Date(sunday).getTime() + 86400000 * i;
          var newdate = new Date(ms);
            if (day[0]) {
                  minutesArray.push({
                        date: newdate,
                        minutes: day[0].minutes_total,
                  });
            } else {
                  minutesArray.push({ date: newdate, minutes: 0 });
            }
    }
    let day = thisWeekData.filter((entry) => entry.daily === 0);
    var ms = new Date(sunday).getTime() + 86400000 * 7;
    var newdate = new Date(ms);
    if (day[0]) {
      minutesArray.push({
        date: newdate,
        minutes: day[0].minutes_total,
      });
    } else {
      minutesArray.push({ date: newdate, minutes: 0 });
    }
      return minutesArray;
}

