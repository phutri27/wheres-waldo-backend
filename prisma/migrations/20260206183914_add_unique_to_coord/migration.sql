/*
  Warnings:

  - A unique constraint covering the columns `[coordinate,map_id,character_name]` on the table `Coord` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Coord_coordinate_map_id_character_name_key" ON "Coord"("coordinate", "map_id", "character_name");
