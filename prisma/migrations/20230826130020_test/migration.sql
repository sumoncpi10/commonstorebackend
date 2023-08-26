/*
  Warnings:

  - The required column `id` was added to the `complain_center` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `pbs` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `substations` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `zonals` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "complain_center" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "complain_center_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "pbs" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "pbs_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "substations" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "substations_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "zonals" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "zonals_pkey" PRIMARY KEY ("id");
