-- CreateEnum
CREATE TYPE "auth"."Role" AS ENUM ('OWNER', 'MEMBER');

-- AlterTable
ALTER TABLE "auth"."User" ADD COLUMN     "role" "auth"."Role" NOT NULL DEFAULT 'MEMBER';
