-- AlterTable
ALTER TABLE "sub_category" ADD COLUMN     "itemCode" TEXT;

-- CreateTable
CREATE TABLE "survicings" (
    "id" TEXT NOT NULL,
    "survicingCost" TEXT NOT NULL,
    "survicingDate" TIMESTAMP(3) NOT NULL,
    "serviceByMobileNo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "identificationNo" TEXT NOT NULL,
    "suplierId" TEXT NOT NULL,
    "revenueItemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "survicings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "survicings" ADD CONSTRAINT "survicings_serviceByMobileNo_fkey" FOREIGN KEY ("serviceByMobileNo") REFERENCES "users"("mobileNo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survicings" ADD CONSTRAINT "survicings_identificationNo_fkey" FOREIGN KEY ("identificationNo") REFERENCES "capital_item"("identificationNo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survicings" ADD CONSTRAINT "survicings_suplierId_fkey" FOREIGN KEY ("suplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survicings" ADD CONSTRAINT "survicings_revenueItemId_fkey" FOREIGN KEY ("revenueItemId") REFERENCES "revenue_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
