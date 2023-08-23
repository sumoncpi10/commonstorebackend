/*
  Warnings:

  - You are about to drop the column `pbsCode` on the `complain_center` table. All the data in the column will be lost.
  - You are about to drop the column `zonalCode` on the `complain_center` table. All the data in the column will be lost.
  - You are about to drop the column `pbsCode` on the `substations` table. All the data in the column will be lost.
  - You are about to drop the column `zonalCode` on the `substations` table. All the data in the column will be lost.
  - You are about to drop the column `pbsCode` on the `zonals` table. All the data in the column will be lost.
  - Added the required column `pbsId` to the `complain_center` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zonalId` to the `complain_center` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pbsId` to the `substations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zonalId` to the `substations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pbsId` to the `zonals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "complain_center" DROP CONSTRAINT "complain_center_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "complain_center" DROP CONSTRAINT "complain_center_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "substations" DROP CONSTRAINT "substations_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "substations" DROP CONSTRAINT "substations_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "zonals" DROP CONSTRAINT "zonals_pbsCode_fkey";

-- AlterTable
ALTER TABLE "complain_center" DROP COLUMN "pbsCode",
DROP COLUMN "zonalCode",
ADD COLUMN     "pbsId" TEXT NOT NULL,
ADD COLUMN     "zonalId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "substations" DROP COLUMN "pbsCode",
DROP COLUMN "zonalCode",
ADD COLUMN     "pbsId" TEXT NOT NULL,
ADD COLUMN     "zonalId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "zonals" DROP COLUMN "pbsCode",
ADD COLUMN     "pbsId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "zonals" ADD CONSTRAINT "zonals_pbsId_fkey" FOREIGN KEY ("pbsId") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "substations" ADD CONSTRAINT "substations_zonalId_fkey" FOREIGN KEY ("zonalId") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "substations" ADD CONSTRAINT "substations_pbsId_fkey" FOREIGN KEY ("pbsId") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_zonalId_fkey" FOREIGN KEY ("zonalId") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_pbsId_fkey" FOREIGN KEY ("pbsId") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
