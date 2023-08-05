-- CreateTable
CREATE TABLE "DownloadSettings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "audioPath" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "downloadSettingsId" INTEGER NOT NULL,
    CONSTRAINT "Settings_downloadSettingsId_fkey" FOREIGN KEY ("downloadSettingsId") REFERENCES "DownloadSettings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
