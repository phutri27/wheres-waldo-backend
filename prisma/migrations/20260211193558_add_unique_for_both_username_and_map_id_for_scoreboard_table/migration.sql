/*
  Warnings:

  - A unique constraint covering the columns `[username,map_id]` on the table `Scoreboard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Scoreboard_username_map_id_key" ON "Scoreboard"("username", "map_id");
