/*
  Warnings:

  - You are about to drop the column `pbsTransferStatus` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "pbsTransferStatus",
ADD COLUMN     "pbsTranferApprovedStatus" BOOLEAN,
ADD COLUMN     "pbsTransferRequestStatus" BOOLEAN DEFAULT false;
