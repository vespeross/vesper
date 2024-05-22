/*
  Warnings:

  - You are about to drop the column `projectId` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "projects"."Project_projectId_key";

-- AlterTable
ALTER TABLE "projects"."Project" DROP COLUMN "projectId",
ADD COLUMN     "key" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_key_key" ON "projects"."Project"("key");
