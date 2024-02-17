/*
  Warnings:

  - A unique constraint covering the columns `[fileId]` on the table `Track` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fileId]` on the table `Video` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Track_fileId_key" ON "Track"("fileId");

-- CreateIndex
CREATE UNIQUE INDEX "Video_fileId_key" ON "Video"("fileId");
