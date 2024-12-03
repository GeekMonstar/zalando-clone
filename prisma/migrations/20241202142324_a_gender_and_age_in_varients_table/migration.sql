/*
  Warnings:

  - Added the required column `age` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Age" AS ENUM ('KID', 'TEEN', 'ADULT', 'SENIOR');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'EU_28', 'EU_29', 'EU_30', 'EU_31', 'EU_32', 'EU_33', 'EU_34', 'EU_35', 'EU_36', 'EU_37', 'EU_38', 'EU_39', 'EU_40', 'EU_41', 'EU_42', 'EU_43', 'EU_44', 'EU_45', 'EU_46', 'EU_47', 'EU_48', 'EU_49', 'EU_50');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "age" "Age" NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Variant" ADD COLUMN     "size" "Size" NOT NULL;
