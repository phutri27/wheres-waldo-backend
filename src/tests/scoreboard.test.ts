import app from "./root";
import { describe, expect, test, beforeEach } from "vitest";
import request from "supertest"
import { prisma } from "../lib/prisma";

describe("scoreboard routes work", () => {
    beforeEach(async () => {
        await prisma.$executeRawUnsafe(`TRUNCATE TABLE "Scoreboard" RESTART IDENTITY CASCADE;`);
    });

    test("test post method of routes", async () => {
        const response = await request(app)
            .post("/scoreboard")
            .type("form")
            .send({username: "phu27", map_id: 1, score: 312})
            .set('Accept', 'application/json')
   
        expect(response.headers["content-type"]).toMatch(/json/)
        expect(response.status).toEqual(200)
        expect(response.body.message).toBe("Add to scoreboard succesfully")
    })

    test("test get method of routes", async () => {
        const postResponse =  await request(app)
            .post("/scoreboard")
            .type("form")
            .send({username: "phu27", map_id: 1, score: 312})
            .set('Accept', 'application/json')

        expect(postResponse.status).toEqual(200);
        const response = await request(app)
            .get("/scoreboard/1")
        
        expect(response.status).toEqual(200)
        expect(response.body.length).toBe(1)
        expect(response.body).toEqual([{username: "phu27", score: 312}])
    })
})