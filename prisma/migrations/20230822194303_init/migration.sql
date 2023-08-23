/*
  Warnings:

  - You are about to drop the `brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `capital_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `designations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `model` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `revenue_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sub_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `suppliers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `survicing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "brand" DROP CONSTRAINT "brand_complainCode_fkey";

-- DropForeignKey
ALTER TABLE "brand" DROP CONSTRAINT "brand_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "brand" DROP CONSTRAINT "brand_substationCode_fkey";

-- DropForeignKey
ALTER TABLE "brand" DROP CONSTRAINT "brand_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_assignTo_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_complainId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_itemTypeId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_subCategoryid_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_substationId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "capital_item" DROP CONSTRAINT "capital_item_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_itemTypeId_fkey";

-- DropForeignKey
ALTER TABLE "complain_center" DROP CONSTRAINT "complain_center_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "complain_center" DROP CONSTRAINT "complain_center_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "designations" DROP CONSTRAINT "designations_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_userInfoId_fkey";

-- DropForeignKey
ALTER TABLE "model" DROP CONSTRAINT "model_complainCode_fkey";

-- DropForeignKey
ALTER TABLE "model" DROP CONSTRAINT "model_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "model" DROP CONSTRAINT "model_substationCode_fkey";

-- DropForeignKey
ALTER TABLE "model" DROP CONSTRAINT "model_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_assignTo_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_complainId_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_itemTypeId_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_subCategoryid_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_substationId_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "revenue_item" DROP CONSTRAINT "revenue_item_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "sub_category" DROP CONSTRAINT "sub_category_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "sub_category" DROP CONSTRAINT "sub_category_itemTypeId_fkey";

-- DropForeignKey
ALTER TABLE "substations" DROP CONSTRAINT "substations_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "suppliers" DROP CONSTRAINT "suppliers_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_complainCode_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_substationCode_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "zonals" DROP CONSTRAINT "zonals_pbsCode_fkey";

-- DropIndex
DROP INDEX "pbs_pbsCode_key";

-- DropIndex
DROP INDEX "zonals_zonalCode_key";

-- DropTable
DROP TABLE "brand";

-- DropTable
DROP TABLE "capital_item";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "departments";

-- DropTable
DROP TABLE "designations";

-- DropTable
DROP TABLE "employees";

-- DropTable
DROP TABLE "item_type";

-- DropTable
DROP TABLE "model";

-- DropTable
DROP TABLE "revenue_item";

-- DropTable
DROP TABLE "role";

-- DropTable
DROP TABLE "sub_category";

-- DropTable
DROP TABLE "suppliers";

-- DropTable
DROP TABLE "survicing";

-- DropTable
DROP TABLE "users";

-- AddForeignKey
ALTER TABLE "zonals" ADD CONSTRAINT "zonals_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "substations" ADD CONSTRAINT "substations_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
