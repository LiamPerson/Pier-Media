/*
  Warnings:

  - A unique constraint covering the columns `[location]` on the table `File` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "File_location_key" ON "File"("location");
