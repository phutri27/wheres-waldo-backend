-- CreateTable
CREATE TABLE "Map" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coord" (
    "id" SERIAL NOT NULL,
    "coordinate" DOUBLE PRECISION NOT NULL,
    "character_name" TEXT NOT NULL,
    "map_id" INTEGER NOT NULL,

    CONSTRAINT "Coord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scoreboard" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "map_id" INTEGER NOT NULL,

    CONSTRAINT "Scoreboard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coord" ADD CONSTRAINT "Coord_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scoreboard" ADD CONSTRAINT "Scoreboard_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
