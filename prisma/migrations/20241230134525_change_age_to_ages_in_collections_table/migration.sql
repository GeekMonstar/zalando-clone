/*
  Warnings:

  - You are about to drop the column `age` on the `Collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "age",
ADD COLUMN     "ages" "Age"[];
