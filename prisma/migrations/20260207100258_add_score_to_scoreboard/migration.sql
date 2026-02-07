/*
  Warnings:

  - Added the required column `score` to the `Scoreboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Scoreboard" ADD COLUMN     "score" INTEGER NOT NULL;
