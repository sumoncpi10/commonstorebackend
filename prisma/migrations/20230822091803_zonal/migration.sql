-- DropForeignKey
ALTER TABLE "zonals" DROP CONSTRAINT "zonals_pbsCode_fkey";

-- AddForeignKey
ALTER TABLE "zonals" ADD CONSTRAINT "zonals_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("pbsCode") ON DELETE RESTRICT ON UPDATE CASCADE;
