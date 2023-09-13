/*
  Warnings:

  - Made the column `itemCode` on table `sub_category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "sub_category" ALTER COLUMN "itemCode" SET NOT NULL;
