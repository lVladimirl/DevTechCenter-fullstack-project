-- CreateEnum
CREATE TYPE "statusType" AS ENUM ('JUNIOR', 'PLENO', 'SENIOR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "bio" VARCHAR(2000) NOT NULL,
    "contact" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "status" "statusType" NOT NULL DEFAULT 'JUNIOR',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
