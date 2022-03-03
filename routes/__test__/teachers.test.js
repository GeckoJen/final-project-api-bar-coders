import request from "supertest";
import app from "../../app.js";
import { describe, it, afterAll } from "@jest/globals";
import { pool } from "../../db/index.js";

afterAll(async () => {
      await pool.end();
});

describe("gets all data needed for whole class dashboard", () => {
      it("returns status code 200", async () => {
            const res = await request(app).get("/teachers/class");
            expect(res.statusCode).toEqual(200);
      });
});

describe("gets all data needed for student dashboard", () => {
      it("returns status code 200", async () => {
            const res = await request(app).get("/teachers/student/s01");
            expect(res.statusCode).toEqual(200);
      });
});

describe("given incorrect student id", () => {
      it("returns status code 400", async () => {
            const res = await request(app).get("/teachers/student/s01");
            expect(res.statusCode).toEqual(200);
      });
});

describe("given feedback details", () => {
      it("should respond with a 200 status once posted", async () => {
            const res = await request(app)
                  .post("/teachers/class/feedback")
                  .send({
                        feedbackText: "well done",
                        teacherId: "t01",
                  });
            expect(res.statusCode).toEqual(200);
            expect(res.body.success).toEqual(true);
      });
});

describe("given incorrect feedback details", () => {
      it("should respond with a 400 status once posted", async () => {
            const res = await request(app)
                  .post("/teachers/class/feedback")
                  .send({
                        feedbackText: "well done",
                        teacherId: 3,
                  });
            expect(res.statusCode).toEqual(400);
            expect(res.body.success).toEqual(false);
      });
});

describe("given correct student id", () => {
      it("returns status code 200", async () => {
            const res = await request(app).get("/teachers/class/feedback/t01");
            expect(res.statusCode).toEqual(200);
      });
});

describe("given incorrect student id", () => {
      it("returns status code 400", async () => {
            const res = await request(app).get("/teachers/class/feedback/t99");
            expect(res.statusCode).toEqual(400);
      });
});

describe("given student feedback details", () => {
      it("should respond with a 200 status once posted", async () => {
            const res = await request(app)
                  .post("/teachers/student/feedback")
                  .send({
                        student_id: "s01",
                        feedback_text: "great stuff",
                  });
            expect(res.statusCode).toEqual(200);
            expect(res.body.success).toEqual(true);
      });
});

describe("given student feedback details", () => {
      it("should respond with a 200 status once posted", async () => {
            const res = await request(app)
                  .post("/teachers/student/feedback")
                  .send({
                        student_id: "s99",
                        feedback_text: 1,
                  });
            expect(res.statusCode).toEqual(400);
            expect(res.body.success).toEqual(true);
      });
});
