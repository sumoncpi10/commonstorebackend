-- AlterTable
ALTER TABLE "users" ADD COLUMN     "pbsTranferApprovedBy" TEXT,
ADD COLUMN     "pbsTransferRequestBy" TEXT,
ADD COLUMN     "pbsTransferStatus" BOOLEAN DEFAULT false,
ADD COLUMN     "zonalTransferApprovedBy" TEXT,
ADD COLUMN     "zonalTransferRequestBy" TEXT,
ADD COLUMN     "zonalTransferStatus" BOOLEAN DEFAULT false;
