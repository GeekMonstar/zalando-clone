/*
  Warnings:

  - You are about to drop the column `image` on the `Variant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[];
