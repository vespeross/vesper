-- CreateTable
CREATE TABLE "projects"."Invite" (
    "cid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "code" TEXT NOT NULL,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("cid")
);

-- CreateIndex
CREATE INDEX "email" ON "projects"."Invite"("email");
