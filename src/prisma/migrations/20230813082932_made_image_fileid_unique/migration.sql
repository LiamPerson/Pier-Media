/*
  Warnings:

  - A unique constraint covering the columns `[fileId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Image_fileId_key" ON "Image"("fileId");
