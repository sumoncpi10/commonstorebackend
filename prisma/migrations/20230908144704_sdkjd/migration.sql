-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_supplierId_fkey";

-- AlterTable
ALTER TABLE "revenue_item" ALTER COLUMN "supplierId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
