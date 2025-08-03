/*
  Warnings:

  - You are about to drop the column `addressAr` on the `Court` table. All the data in the column will be lost.
  - You are about to drop the column `nameAr` on the `Court` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Court` DROP COLUMN `addressAr`,
    DROP COLUMN `nameAr`;
