/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `DatabaseUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "projects"."Project_name_key";

-- AlterTable
ALTER TABLE "projects"."Project" ADD COLUMN     "projectId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseUser_username_key" ON "databases"."DatabaseUser"("username");

-- CreateIndex
CREATE INDEX "databaseId" ON "databases"."DatabaseUser"("databaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectId_key" ON "projects"."Project"("projectId");
