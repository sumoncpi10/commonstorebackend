/*
  Warnings:

  - You are about to drop the column `purchaseNate` on the `capital_item` table. All the data in the column will be lost.
  - Added the required column `purchasedate` to the `capital_item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_addByMobileNo_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_assignToMobileNo_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_brandId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_complainCode_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_issueByMobileNo_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_itemTypeId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_modelId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_receivedByMobileNo_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_subCategoryid_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_substationCode_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_zonalCode_fkey";

-- AlterTable
ALTER TABLE "capital_item" DROP COLUMN "purchaseNate",
ADD COLUMN     "purchasedate" TEXT NOT NULL,
ALTER COLUMN "modelId" DROP NOT NULL,
ALTER COLUMN "brandId" DROP NOT NULL,
ALTER COLUMN "pbsCode" DROP NOT NULL,
ALTER COLUMN "zonalCode" DROP NOT NULL,
ALTER COLUMN "complainCode" DROP NOT NULL,
ALTER COLUMN "substationCode" DROP NOT NULL,
ALTER COLUMN "itemTypeId" DROP NOT NULL,
ALTER COLUMN "categoryId" DROP NOT NULL,
ALTER COLUMN "subCategoryid" DROP NOT NULL,
ALTER COLUMN "issueByMobileNo" DROP NOT NULL,
ALTER COLUMN "assignToMobileNo" DROP NOT NULL,
ALTER COLUMN "receivedByMobileNo" DROP NOT NULL,
ALTER COLUMN "addByMobileNo" DROP NOT NULL,
ALTER COLUMN "supplierId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("pbsCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("zonalCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_complainCode_fkey" FOREIGN KEY ("complainCode") REFERENCES "complain_center"("complainCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_substationCode_fkey" FOREIGN KEY ("substationCode") REFERENCES "substations"("substationCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "item_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_subCategoryid_fkey" FOREIGN KEY ("subCategoryid") REFERENCES "sub_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_issueByMobileNo_fkey" FOREIGN KEY ("issueByMobileNo") REFERENCES "users"("mobileNo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_assignToMobileNo_fkey" FOREIGN KEY ("assignToMobileNo") REFERENCES "users"("mobileNo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_receivedByMobileNo_fkey" FOREIGN KEY ("receivedByMobileNo") REFERENCES "users"("mobileNo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_addByMobileNo_fkey" FOREIGN KEY ("addByMobileNo") REFERENCES "users"("mobileNo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
