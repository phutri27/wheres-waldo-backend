import { prisma } from "../lib/prisma.js";

class Coords {
    async getCoord(map_id: number, character_name: string){
        const result = await prisma.coord.findUnique({
            where: {
                coordId:{
                    map_id: map_id,
                    character_name: character_name
                }
            },
            select:{
                character_name: true,
                x_coord: true,
                y_coord: true
            }
        })

        return result
    }
}

class Scoreboard{
    async getScoreboard(map_id: number){
        const result = await prisma.scoreboard.findMany({
            where:{
                map_id: map_id
            },
            orderBy:{
                score: "asc"
            },
            select: {
                username: true,
                score: true
            }
        })
        return result
    }

    async postScoreboard(map_id: number, username: string, score: number){
        await prisma.scoreboard.create({
            data:{
                map_id: map_id,
                username: username,
                score: score
            }
        })
    }

    async getUsername(username: string, map_id: number){
        const result = await prisma.scoreboard.findUnique({
            where: {
                uniqueName:{
                    username: username,
                    map_id: map_id
                }
            },
            select:{
                username: true
            }
        })
        return result
    }
}

export const coordObj = new Coords()
export const scoreboardObj = new Scoreboard()
