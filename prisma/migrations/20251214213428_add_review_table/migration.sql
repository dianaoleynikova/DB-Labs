-- CreateTable
CREATE TABLE "author" (
    "author_id" SERIAL NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "birth_date" DATE,

    CONSTRAINT "author_pkey" PRIMARY KEY ("author_id")
);

-- CreateTable
CREATE TABLE "book" (
    "book_id" SERIAL NOT NULL,
    "isbn" VARCHAR(20) NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "year_published" INTEGER,
    "genre" VARCHAR(50),
    "publisher_id" INTEGER,

    CONSTRAINT "book_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "bookauthor" (
    "book_id" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,

    CONSTRAINT "bookauthor_pkey" PRIMARY KEY ("book_id","author_id")
);

-- CreateTable
CREATE TABLE "copy" (
    "copy_id" SERIAL NOT NULL,
    "book_id" INTEGER,
    "condition" VARCHAR(50),
    "is_availible" BOOLEAN DEFAULT true,

    CONSTRAINT "copy_pkey" PRIMARY KEY ("copy_id")
);

-- CreateTable
CREATE TABLE "fine" (
    "fine_id" SERIAL NOT NULL,
    "loan_id" INTEGER,
    "amount" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "fine_pkey" PRIMARY KEY ("fine_id")
);

-- CreateTable
CREATE TABLE "loan" (
    "loan_id" SERIAL NOT NULL,
    "copy_id" INTEGER,
    "member_id" INTEGER,
    "loan_date" DATE NOT NULL,
    "due_date" DATE,
    "return_date" DATE,

    CONSTRAINT "loan_pkey" PRIMARY KEY ("loan_id")
);

-- CreateTable
CREATE TABLE "member" (
    "member_id" SERIAL NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20),
    "address" VARCHAR(200),
    "member_type" VARCHAR(20),
    "join_date" DATE DEFAULT CURRENT_DATE,

    CONSTRAINT "member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "publisher" (
    "publisher_id" SERIAL NOT NULL,
    "name_and_surname" VARCHAR(100) NOT NULL,
    "address" VARCHAR(200),
    "phone" VARCHAR(20),

    CONSTRAINT "publisher_pkey" PRIMARY KEY ("publisher_id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "book_id" INTEGER NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_isbn_key" ON "book"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "member_email_key" ON "member"("email");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "publisher"("publisher_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookauthor" ADD CONSTRAINT "bookauthor_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("author_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookauthor" ADD CONSTRAINT "bookauthor_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("book_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "copy" ADD CONSTRAINT "copy_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("book_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fine" ADD CONSTRAINT "fine_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loan"("loan_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_copy_id_fkey" FOREIGN KEY ("copy_id") REFERENCES "copy"("copy_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;
