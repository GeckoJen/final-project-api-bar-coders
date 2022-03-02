import request from "supertest";
import app from "../../app.js";
import { describe, it, afterAll } from "@jest/globals";
import { pool } from "../../db/index.js";

afterAll(async () => {
  await pool.end();
});

describe("get students current books", () => {
  it("returns status code 200 if student exists", async () => {
    const res = await request(app)
      .get("/books/s01")
      .set("Accept", "application/json");
    // expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.statusCode).toEqual(200);
  });
});

describe("get students current books", () => {
  it("returns status code 400 if student does not exists", async () => {
    const res = await request(app).get("/books/s99");
    expect(res.statusCode).toEqual(400);
  });
});

describe("given summary details", () => {
  it("should respond with a 200 status once posted", async () => {
    const res = await request(app).post("/summaries").send({
      bookId: 22,
      studentId: "s01",
      currentPage: 184,
      summary: "this is a test!",
      isComplete: true,
      minutesRead: 20,
      pagesRead: 22
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
  });
});

describe("given bad summary details", () => {
  it("should respond with a 400 status once posted", async () => {
    const res = await request(app).post("/summaries").send({
      bookId: "test",
      studentId: "s01",
      currentPage: 184,
      summary: "this is a test!",
      isComplete: true,
          minutesRead: 20,
      pagesRead: 22
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
  });
});

describe("get students completed books", () => {
  it("returns status code 200 if student exists", async () => {
    const res = await request(app)
      .get("/completedbooks/s01")
      .set("Accept", "application/json");
    // expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.statusCode).toEqual(200);
  });
});

describe("get students completed books", () => {
  it("returns status code 400 if student does not exists", async () => {
    const res = await request(app)
      .get("/completedbooks/s99")
      .set("Accept", "application/json");
    // expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
  });
});

describe("get stored words for student", () => {
  it("returns status code 200 if student exists", async () => {
    const res = await request(app)
      .get("/dictionary/s01")
      .set("Accept", "application/json");
    // expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.statusCode).toEqual(200);
  });
});

describe("get stored words for student", () => {
  it("returns status code 400 if student doesn't exists", async () => {
    const res = await request(app)
      .get("/dictionary/s99")
      .set("Accept", "application/json");
    // expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
  });
});

describe("get stored words for student", () => {
  it("returns status code 400 if student doesn't exists", async () => {
    const res = await request(app)
      .get("/dictionary/s99")
      .set("Accept", "application/json");
    // expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
  });
});

describe("given dictionary details", () => {
  it("should respond with a 200 status once posted", async () => {
    const res = await request(app).post("/dictionary").send({
      studentId: "s01",
      word: "test",
    });
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
  });
});

// accepts digits as a word, need to double check this
describe("given bad dictionary details", () => {
  it("should respond with a 400 status once posted", async () => {
    const res = await request(app).post("/dictionary").send({
      studentId: "s01",
      word: 2,
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toEqual(false);
  });
});
