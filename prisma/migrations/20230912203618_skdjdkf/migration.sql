/*
  Warnings:

  - You are about to drop the column `name` on the `employees` table. All the data in the column will be lost.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;
