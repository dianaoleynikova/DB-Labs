const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Створюємо книгу з автором
  const book = await prisma.book.create({
    data: {
      title: "Пригоди Програміста",
      isbn: "978-1234567890",
      year_published: 2025,
      genre: "IT",
      bookauthor: {
        create: [
          {
            author: {
              create: { full_name: "Діана" } // створюємо автора
            }
          }
        ]
      }
    },
    include: {
      bookauthor: { include: { author: true } } // щоб побачити автора у результаті
    }
  });

  console.log("Створено книгу з автором:", book);

  // Створюємо рев’ю для цієї книги
  const review = await prisma.review.create({
    data: {
      rating: 5,
      comment: "Цікава книга!",
      book_id: book.book_id
    }
  });

  console.log("Створено рев’ю:", review);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });