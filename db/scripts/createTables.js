import query from "../index.js";

const sqlString = `CREATE TABLE teachers ( 
      id INT PRIMARY KEY,
      name TEXT
    );
    `;

async function createTeachersTable() {
      const res = await query(sqlString);
}

createTeachersTable();
