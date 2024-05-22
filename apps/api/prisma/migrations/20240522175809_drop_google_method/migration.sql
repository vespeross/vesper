/*
  Warnings:

  - You are about to drop the column `strategy` on the `User` table. All the data in the column will be lost.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "databases";

-- CreateEnum
CREATE TYPE "databases"."DatabaseType" AS ENUM ('POSTGRES', 'MYSQL', 'MONGODB');

-- AlterTable
ALTER TABLE "auth"."User" DROP COLUMN "strategy";

-- DropEnum
DROP TYPE "auth"."Strategy";

-- CreateTable
CREATE TABLE "databases"."Database" (
    "cid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "databases"."DatabaseType" NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Database_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "databases"."DatabaseUser" (
    "cid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "databaseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseUser_pkey" PRIMARY KEY ("cid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Database_name_key" ON "databases"."Database"("name");

-- CreateIndex
CREATE INDEX "projectId" ON "databases"."Database"("projectId");

-- AddForeignKey
ALTER TABLE "databases"."Database" ADD CONSTRAINT "Database_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"."Project"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "databases"."DatabaseUser" ADD CONSTRAINT "DatabaseUser_databaseId_fkey" FOREIGN KEY ("databaseId") REFERENCES "databases"."Database"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;
