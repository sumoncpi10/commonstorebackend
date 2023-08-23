/*
  Warnings:

  - A unique constraint covering the columns `[zonalCode]` on the table `zonals` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "complain_center" DROP CONSTRAINT "complain_center_pbsCode_fkey";

-- DropForeignKey
ALTER TABLE "complain_center" DROP CONSTRAINT "complain_center_zonalCode_fkey";

-- DropForeignKey
ALTER TABLE "substations" DROP CONSTRAINT "substations_pbsCode_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "zonals_zonalCode_key" ON "zonals"("zonalCode");

-- AddForeignKey
ALTER TABLE "substations" ADD CONSTRAINT "substations_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("pbsCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("zonalCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("pbsCode") ON DELETE RESTRICT ON UPDATE CASCADE;
