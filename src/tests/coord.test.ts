import app from "./root";
import { describe, expect, test } from "vitest";
import request from "supertest"

describe("testing routes work", () => {

    test("test index get method works", async (done) => {
        return request(app)
        .get("/1/0.65/Waldo")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => expect(response.body.name).toEqual("Waldo"))
    })

    test("test index get method works", async (done) => {
        return request(app)
        .get("/1/10/Waldo")
        .expect("Content-Type", /json/)
        .expect(301)
        .then(response => expect(response.body.name).not.toEqual("Waldo"))
    })
})