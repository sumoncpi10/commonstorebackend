-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_complainCode_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_substationCode_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_zonalCode_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "zonalCode" DROP NOT NULL,
ALTER COLUMN "substationCode" DROP NOT NULL,
ALTER COLUMN "complainCode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("zonalCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_substationCode_fkey" FOREIGN KEY ("substationCode") REFERENCES "substations"("substationCode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_complainCode_fkey" FOREIGN KEY ("complainCode") REFERENCES "complain_center"("complainCode") ON DELETE SET NULL ON UPDATE CASCADE;
