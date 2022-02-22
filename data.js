export const teacherData = [{ id: "t01", name: "Mrs Freeman", class: "5C" }];

export const studentData = [
  {
    id: "s01",
    name: "Alice",
    avatar: "https://dummy.photos/1",
    class: "5C",
    teacher_id: "t01",
  },
  {
    id: "s02",
    name: "Samira",
    avatar: "https://dummy.photos/2",
    class: "5C",
    teacher_id: "t01",
  },
  {
    id: "s03",
    name: "Juan",
    avatar: "https://dummy.photos/3",
    class: "5C",
    teacher_id: "t01",
  },
  {
    id: "s04",
    name: "Robert",
    avatar: "https://dummy.photos/4",
    class: "5C",
    teacher_id: "t01",
  },
  {
    id: "s05",
    name: "Yasmin",
    avatar: "https://dummy.photos/5",
    class: "5C",
    teacher_id: "t01",
  },
];

export const classFeedbackData = [
  {
    class: "5C",
    feedback_text: "Well done class, you've all been reading!",


    teacher_id: "t01",

  },
  {
    class: "5C",
    feedback_text: "Remember to bring in the book you're reading tomorrow!",

    teacher_id: "t01",

  },
];

export const feedbackData = [
  { student_id: "s01", feedback_text: "Welll done, Alice!" },
  { student_id: "s02", feedback_text: "Welll done, Samira!" },
  { student_id: "s03", feedback_text: "Welll done, Juan!" },
  { student_id: "s04", feedback_text: "Welll done, Robert!" },
  { student_id: "s05", feedback_text: "Welll done, Yasmin!" },
];


export const dictionaryData = [

  { student_id: "s01", word: "accommodate", definition: "to have room for" },
  {
    student_id: "s02",
    word: "exaggerate",
    definition: "to present as larger, more important, or more valuable",
  },
  {
    student_id: "s03",
    word: "guarantee",
    definition: "a promise that will work or be done properly",
  },
  {
    student_id: "s04",
    word: "sacrifice ",
    definition:
      "the act of giving up something of great value to show loyalty or deep affection",
  },
  {
    student_id: "s05",
    word: "recognise",
    definition:
      "to identify (someone or something) from previous experience or contact",
  },
];

export const allBooksData = [
  {
    id: 1,
    student_id: "s01",
    title: "Super Scientists",
    author: "Anne Blanchard",
    cover: "https://dummy.photos/book-cover",
    total_pages: 150,
  },
  {
    id: 2,
    student_id: "s01",
    title: "Ghost",
    author: "Jason Reynolds",
    cover: "https://dummy.photos/book-cover",
    total_pages: 200,
  },
  {
    id: 3,
    student_id: "s01",
    title: "Funky chickens",
    author: "Benjamin Zephaniah",
    cover: "https://dummy.photos/book-cover",
    total_pages: 250,
  },
  {
    id: 4,
    student_id: "s02",
    title: "Super Scientists",
    author: "Anne Blanchard",
    cover: "https://dummy.photos/book-cover",
    total_pages: 150,
  },
  {
    id: 5,
    student_id: "s02",
    title: "Ghost",
    author: "Jason Reynolds",
    cover: "https://dummy.photos/book-cover",
    total_pages: 200,
  },
  {
    id: 6,
    student_id: "s02",
    title: "Funky chickens",
    author: "Benjamin Zephaniah",
    cover: "https://dummy.photos/book-cover",
    total_pages: 250,
  },
  {
    id: 7,
    student_id: "s03",
    title: "Super Scientists",
    author: "Anne Blanchard",
    cover: "https://dummy.photos/book-cover",
    total_pages: 150,
  },
  {
    id: 8,
    student_id: "s03",
    title: "Ghost",
    author: "Jason Reynolds",
    cover: "https://dummy.photos/book-cover",
    total_pages: 200,
  },
  {
    id: 9,
    student_id: "s03",
    title: "Funky chickens",
    author: "Benjamin Zephaniah",
    cover: "https://dummy.photos/book-cover",
    total_pages: 250,
  },
  {
    id: 10,
    student_id: "s04",
    title: "Super Scientists",
    author: "Anne Blanchard",
    cover: "https://dummy.photos/book-cover",
    total_pages: 150,
  },
  {
    id: 11,
    student_id: "s04",
    title: "Ghost",
    author: "Jason Reynolds",
    cover: "https://dummy.photos/book-cover",
    total_pages: 200,
  },
  {
    id: 12,
    student_id: "s04",
    title: "Funky chickens",
    author: "Benjamin Zephaniah",
    cover: "https://dummy.photos/book-cover",
    total_pages: 250,
  },
  {
    id: 13,
    student_id: "s05",
    title: "Super Scientists",
    author: "Anne Blanchard",
    cover: "https://dummy.photos/book-cover",
    total_pages: 150,
  },
  {
    id: 14,
    student_id: "s05",
    title: "Ghost",
    author: "Jason Reynolds",
    cover: "https://dummy.photos/book-cover",
    total_pages: 200,
  },
  {
    id: 15,
    student_id: "s05",
    title: "Funky chickens",
    author: "Benjamin Zephaniah",
    cover: "https://dummy.photos/book-cover",
    total_pages: 250,
  },
];

export const summaryData = [
  {
    student_id: "s01",
    book_id: 1,
    current_page: 50,
    summary: "Not great!",
    isComplete: "false",
    minutes_read: 30,
  },
  {
    student_id: "s01",
    book_id: 2,
    current_page: 100,
    summary: "Ok!",
    isComplete: "false",
    minutes_read: 50,
  },
  {
    student_id: "s01",
    book_id: 3,
    current_page: 250,
    summary: "Amazing!",
    isComplete: "true",
    minutes_read: 70,
  },
  {
    student_id: "s02",
    book_id: 4,
    current_page: 50,
    summary: "Not great!",
    isComplete: "false",
    minutes_read: 30,
  },
  {
    student_id: "s02",
    book_id: 5,
    current_page: 100,
    summary: "Ok!",
    isComplete: "false",
    minutes_read: 40,
  },
  {
    student_id: "s02",
    book_id: 6,
    current_page: 250,
    summary: "Amazing!",
    isComplete: "true",
    minutes_read: 60,
  },
  {
    student_id: "s03",
    book_id: 7,
    current_page: 50,
    summary: "Not great!",
    isComplete: "false",
    minutes_read: 30,
  },
  {
    student_id: "s03",
    book_id: 8,
    current_page: 100,
    summary: "Ok!",
    isComplete: "false",
    minutes_read: 40,
  },
  {
    student_id: "s03",
    book_id: 9,
    current_page: 250,
    summary: "Amazing!",
    isComplete: "true",
    minutes_read: 60,
  },
];
