/*
  Warnings:

  - You are about to drop the column `bloodGroup` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `contactNo` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profileImage` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `users` table. All the data in the column will be lost.
  - Added the required column `mobile_no` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "bloodGroup",
DROP COLUMN "contactNo",
DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "gender",
DROP COLUMN "lastName",
DROP COLUMN "middleName",
DROP COLUMN "profileImage",
DROP COLUMN "studentId",
ADD COLUMN     "mobile_no" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "pbs" (
    "id" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "pbs_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pbs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zonals" (
    "id" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "zonal_name" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "zonals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "substations" (
    "id" TEXT NOT NULL,
    "ss_code" TEXT NOT NULL,
    "ss_name" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "substations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complain_center" (
    "id" TEXT NOT NULL,
    "cc_code" TEXT NOT NULL,
    "cc_name" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "complain_center_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_info" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "trg_id" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "sign_url" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_info_pkey" PRIMARY KEY ("id")
);
