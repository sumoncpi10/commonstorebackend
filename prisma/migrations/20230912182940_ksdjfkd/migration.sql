/*
  Warnings:

  - You are about to drop the column `zonalTransferApprovedBy` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "zonalTransferApprovedBy",
ADD COLUMN     "zonalTranferApprovedBy" TEXT,
ADD COLUMN     "zonalTranferApprovedDate" TIMESTAMP(3),
ADD COLUMN     "zonalTranferCancelBy" TEXT,
ADD COLUMN     "zonalTranferCancelDate" TIMESTAMP(3),
ADD COLUMN     "zonalTransferRequestBy" TEXT,
ADD COLUMN     "zonalTransferRequestDate" TIMESTAMP(3);
