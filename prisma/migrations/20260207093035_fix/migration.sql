/*
  Warnings:

  - A unique constraint covering the columns `[map_id,character_name]` on the table `Coord` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Coord_coordinate_map_id_character_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Coord_map_id_character_name_key" ON "Coord"("map_id", "character_name");
