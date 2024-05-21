-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "projects";

-- CreateTable
CREATE TABLE "projects"."Project" (
    "cid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("cid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "projects"."Project"("name");

-- CreateIndex
CREATE INDEX "ownerId" ON "projects"."Project"("ownerId");

-- CreateIndex
CREATE INDEX "email" ON "auth"."User"("email");

-- AddForeignKey
ALTER TABLE "projects"."Project" ADD CONSTRAINT "Project_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "auth"."User"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;
