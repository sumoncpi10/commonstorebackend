/*
  Warnings:

  - You are about to drop the column `title` on the `departments` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `designations` table. All the data in the column will be lost.
  - Added the required column `departmentName` to the `departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designationName` to the `designations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "departments" DROP COLUMN "title",
ADD COLUMN     "departmentName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "designations" DROP COLUMN "title",
ADD COLUMN     "designationName" TEXT NOT NULL;
