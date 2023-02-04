-- CreateEnum
CREATE TYPE "statusType" AS ENUM ('JUNIOR', 'PLENO', 'SENIOR');

-- CreateEnum
CREATE TYPE "techStatus" AS ENUM ('INICIANTE', 'INTERMEDIARIO', 'AVANCADO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "bio" VARCHAR(2000) NOT NULL,
    "contact" VARCHAR(20) NOT NULL,
    "status" "statusType" NOT NULL DEFAULT 'JUNIOR',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technologies" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "status" "techStatus" NOT NULL DEFAULT 'INICIANTE',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Technologies" ADD CONSTRAINT "Technologies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
