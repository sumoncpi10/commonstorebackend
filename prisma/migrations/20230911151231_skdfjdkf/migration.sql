/*
  Warnings:

  - Changed the type of `survicingDate` on the `survicings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "survicings" DROP COLUMN "survicingDate",
ADD COLUMN     "survicingDate" TIMESTAMP(3) NOT NULL;
