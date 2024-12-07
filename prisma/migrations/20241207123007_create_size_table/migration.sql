/*
  Warnings:

  - You are about to drop the column `size` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Variant` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SizeName" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'EU_28', 'EU_29', 'EU_30', 'EU_31', 'EU_32', 'EU_33', 'EU_34', 'EU_35', 'EU_36', 'EU_37', 'EU_38', 'EU_39', 'EU_40', 'EU_41', 'EU_42', 'EU_43', 'EU_44', 'EU_45', 'EU_46', 'EU_47', 'EU_48', 'EU_49', 'EU_50');

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "size",
DROP COLUMN "stock";

-- DropEnum
DROP TYPE "Size";

-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "name" "SizeName" NOT NULL,
    "variantId" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
