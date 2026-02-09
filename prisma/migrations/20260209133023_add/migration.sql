/*
  Warnings:

  - You are about to drop the column `coordinate` on the `Coord` table. All the data in the column will be lost.
  - Added the required column `x_coord` to the `Coord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y_coord` to the `Coord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coord" DROP COLUMN "coordinate",
ADD COLUMN     "x_coord" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "y_coord" DOUBLE PRECISION NOT NULL;
