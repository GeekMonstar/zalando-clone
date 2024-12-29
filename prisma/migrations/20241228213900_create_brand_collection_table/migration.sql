/*
  Warnings:

  - The values [SENIOR] on the enum `Age` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `collectionId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `gender` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SHOES', 'CLOTHES', 'ACCESSORIES', 'ELECTRONICS', 'SPORT', 'BEAUTY');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('JACKET', 'SHIRT', 'TSHIRT', 'PANT', 'SUIT', 'DRESS', 'BOOT', 'SPORT', 'SNEAKERS', 'SANDALS', 'SLIPPERS', 'FLIPFLOP', 'HEELS', 'FLAT', 'WEDGE');

-- AlterEnum
BEGIN;
CREATE TYPE "Age_new" AS ENUM ('BABY', 'INFANT', 'KID', 'TEEN', 'ADULT');
ALTER TABLE "Product" ALTER COLUMN "age" TYPE "Age_new" USING ("age"::text::"Age_new");
ALTER TYPE "Age" RENAME TO "Age_old";
ALTER TYPE "Age_new" RENAME TO "Age";
DROP TYPE "Age_old";
COMMIT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "collectionId" TEXT NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL;

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "mediaType" TEXT,
    "mediaSource" TEXT,
    "mainColor" TEXT,
    "secondaryColor" TEXT,
    "brandId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
