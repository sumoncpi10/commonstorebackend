/*
  Warnings:

  - You are about to drop the column `pbsTranferApprovedStatus` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `pbsTransferRequestStatus` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "pbsTranferApprovedStatus",
DROP COLUMN "pbsTransferRequestStatus",
ADD COLUMN     "pbsTranferApprovedDate" TIMESTAMP(3),
ADD COLUMN     "pbsTransferRequestDate" TIMESTAMP(3),
ADD COLUMN     "pbsTransferStatus" BOOLEAN DEFAULT false;
