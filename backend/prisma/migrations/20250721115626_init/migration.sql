/*
  Warnings:

  - Added the required column `dayOfWeek` to the `CourtAvailability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CourtAvailability` ADD COLUMN `dayOfWeek` INTEGER NOT NULL;
