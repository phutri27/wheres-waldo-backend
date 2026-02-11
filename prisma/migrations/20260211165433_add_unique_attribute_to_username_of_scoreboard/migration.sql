/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Scoreboard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Scoreboard_username_key" ON "Scoreboard"("username");
