import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS teachers ( 
      id VARCHAR PRIMARY KEY,
      name TEXT, 
      class VARCHAR
    );
    CREATE TABLE IF NOT EXISTS students ( 
      id VARCHAR PRIMARY KEY,
      name TEXT,
      avatar VARCHAR,
      class VARCHAR,
      teacher_id VARCHAR,
      CONSTRAINT fk_teacher_id
      FOREIGN KEY(teacher_id)
      REFERENCES teachers(id)
    );
    CREATE TABLE IF NOT EXISTS classfeedback ( 
      id SERIAL PRIMARY KEY,
      date DATE DEFAULT CURRENT_DATE,
      class VARCHAR,
      feedback_text VARCHAR,
      teacher_id VARCHAR,
      CONSTRAINT fk_teacher_id
      FOREIGN KEY(teacher_id)
      REFERENCES teachers(id)
    );
    CREATE TABLE IF NOT EXISTS feedback ( 
      id SERIAL PRIMARY KEY,
      date DATE DEFAULT CURRENT_DATE,
      student_id VARCHAR,
      feedback_text VARCHAR,
    CONSTRAINT fk_student_id
    FOREIGN KEY(student_id)
  	REFERENCES students(id)
); CREATE TABLE dictionary (
      id SERIAL PRIMARY KEY,
        student_id VARCHAR,
      date_created DATE DEFAULT CURRENT_DATE,
      word TEXT,
    definition TEXT,
      CONSTRAINT fk_student_id
      FOREIGN KEY(student_id)
          REFERENCES students(id)
  );CREATE TABLE allBooks (
      id INT PRIMARY KEY, 
   student_id VARCHAR,
 date_created DATE DEFAULT CURRENT_DATE,
 title TEXT,
 author TEXT,
 cover VARCHAR,
 total_pages INT,
 CONSTRAINT fk_student_id
 FOREIGN KEY(student_id)
     REFERENCES students(id)
);CREATE TABLE summaries (
      id SERIAL PRIMARY KEY,
        student_id VARCHAR,
      date_created DATE DEFAULT CURRENT_DATE,
      book_id INT,
      current_page INT,
      summary VARCHAR,
      isComplete boolean,
    minutes_read INT,
      CONSTRAINT fk_student_id
      FOREIGN KEY(student_id)
          REFERENCES students(id),
      CONSTRAINT fk_book_id
      FOREIGN KEY(book_id)
          REFERENCES allBooks(id)
  );
      
  
    `;

async function createTeachersTable() {
  const res = await query(sqlString);
}

createTeachersTable();
