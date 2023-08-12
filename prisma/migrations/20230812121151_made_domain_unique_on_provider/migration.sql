/*
  Warnings:

  - A unique constraint covering the columns `[domain]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Provider_domain_key" ON "Provider"("domain");
