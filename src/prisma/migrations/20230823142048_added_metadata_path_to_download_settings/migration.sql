/*
  Warnings:

  - Added the required column `metadataPath` to the `DownloadSettings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DownloadSettings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "audioPath" TEXT NOT NULL,
    "metadataPath" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL
);
INSERT INTO "new_DownloadSettings" ("audioPath", "id", "imagePath", "path", "updatedAt", "videoPath") SELECT "audioPath", "id", "imagePath", "path", "updatedAt", "videoPath" FROM "DownloadSettings";
DROP TABLE "DownloadSettings";
ALTER TABLE "new_DownloadSettings" RENAME TO "DownloadSettings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
