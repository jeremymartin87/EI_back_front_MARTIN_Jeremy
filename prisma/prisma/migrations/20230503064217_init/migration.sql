-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT,
    "description" TEXT NOT NULL,
    "statut" TEXT
);
