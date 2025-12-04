SELECT book_id, title, genre, year_published FROM Book;

SELECT copy_id, book_id, condition 
FROM Copy
WHERE is_available = TRUE;


SELECT title, genre 
FROM Book
WHERE genre = 'Fiction';


SELECT b.title, a.full_name
FROM Book b
JOIN BookAuthor ba ON b.book_id = ba.book_id
JOIN Author a ON ba.author_id = a.author_id;


SELECT l.loan_id, m.full_name, b.title, l.loan_date, l.due_date
FROM Loan l
JOIN Copy c ON l.copy_id = c.copy_id
JOIN Book b ON c.book_id = b.book_id
JOIN Member m ON l.member_id = m.member_id
WHERE l.return_date IS NULL;


INSERT INTO Author (full_name, birth_date)
VALUES ('J. K. Rowling', '1965-07-31');

INSERT INTO Book (isbn, title, year_published, genre, publisher_id)
VALUES ('9780439554930', 'Harry Potter and the Sorcerer''s Stone', 1997, 'Fantasy', 1); 

INSERT INTO BookAuthor (book_id, author_id)
VALUES (3, 3);

INSERT INTO Member (full_name, email, phone, address, member_type)
VALUES ('Alice Brown', 'alice.b@example.com', '+380-555-111', 'Kyiv', 'Student');

INSERT INTO Member (full_name, email, phone, address, member_type)
VALUES ('Daria Teteruk', 'daria.t@example.com', '+380-974-818-332', 'Akademika Yanhelia Street, Kyiv', 'Student');

UPDATE Member
SET address = 'Mykhaila Braichevskoho Street 8, Kyiv'
WHERE full_name = 'Diana Oleynikova';

UPDATE Copy
SET is_available = TRUE
WHERE copy_id = 2;

UPDATE Loan
SET fine_amount = 5.00
WHERE loan_id = 2; 

DELETE FROM Member
WHERE email = 'bob@example.com';

DELETE FROM Copy
WHERE copy_id = 1;

DELETE FROM Loan
WHERE loan_id = 1;

SELECT b.title, p.name_and_surname AS publisher
FROM Book b
JOIN Publisher p ON b.publisher_id = p.publisher_id; 

SELECT m.full_name, b.title, l.loan_date
FROM Loan l
JOIN Member m ON l.member_id = m.member_id
JOIN Copy c ON l.copy_id = c.copy_id
JOIN Book b ON c.book_id = b.book_id;

SELECT title, year_published
FROM Book
WHERE year_published > 1950;