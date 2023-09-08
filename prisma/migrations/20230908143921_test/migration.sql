/*
  Warnings:

  - You are about to drop the column `approveByMobleNo` on the `capital_item` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[brandName]` on the table `brands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[departmentName]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[designationName]` on the table `designations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[modelName]` on the table `models` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_approveByMobleNo_fkey";

-- AlterTable
ALTER TABLE "capital_item" DROP COLUMN "approveByMobleNo",
ADD COLUMN     "approveByMobileNo" TEXT,
ADD COLUMN     "certifiedByMobileNo" TEXT,
ALTER COLUMN "identificationNo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "revenue_item" ADD COLUMN     "certifiedByMobileNo" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "brands_brandName_key" ON "brands"("brandName");

-- CreateIndex
CREATE UNIQUE INDEX "departments_departmentName_key" ON "departments"("departmentName");

-- CreateIndex
CREATE UNIQUE INDEX "designations_designationName_key" ON "designations"("designationName");

-- CreateIndex
CREATE UNIQUE INDEX "models_modelName_key" ON "models"("modelName");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_name_key" ON "suppliers"("name");

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_approveByMobileNo_fkey" FOREIGN KEY ("approveByMobileNo") REFERENCES "users"("mobileNo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_certifiedByMobileNo_fkey" FOREIGN KEY ("certifiedByMobileNo") REFERENCES "users"("mobileNo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_certifiedByMobileNo_fkey" FOREIGN KEY ("certifiedByMobileNo") REFERENCES "users"("mobileNo") ON DELETE SET NULL ON UPDATE CASCADE;
