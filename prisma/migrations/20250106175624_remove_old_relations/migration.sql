/*
  Warnings:

  - You are about to drop the `CollectionProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollectionProduct" DROP CONSTRAINT "CollectionProduct_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionProduct" DROP CONSTRAINT "CollectionProduct_productId_fkey";

-- DropTable
DROP TABLE "CollectionProduct";
