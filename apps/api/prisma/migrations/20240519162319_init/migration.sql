-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateEnum
CREATE TYPE "auth"."Strategy" AS ENUM ('LOCAL', 'GOOGLE');

-- CreateTable
CREATE TABLE "auth"."User" (
    "cid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT,
    "strategy" "auth"."Strategy" NOT NULL DEFAULT 'LOCAL',

    CONSTRAINT "User_pkey" PRIMARY KEY ("cid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "auth"."User"("email");
