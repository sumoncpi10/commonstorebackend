-- CreateEnum
CREATE TYPE "ItemCode" AS ENUM ('CPU', 'MNT', 'UPS', 'DVR');

-- AlterTable
ALTER TABLE "capital_item" ADD COLUMN     "itemCode" "ItemCode";
