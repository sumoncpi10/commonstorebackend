/*
  Warnings:

  - You are about to drop the column `zonalTransferRequestBy` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "zonalTransferRequestBy",
ALTER COLUMN "pbsTranferApprovedStatus" SET DEFAULT false;
