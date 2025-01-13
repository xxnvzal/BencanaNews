-- Membuat database dan menggunakan database tersebut
CREATE DATABASE pemiskuas;
USE pemiskuas;

-- Membuat tabel articles
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    category VARCHAR(50),
    date DATE,
    author VARCHAR(100),
    location VARCHAR(255)
);

-- Menampilkan tabel yang ada
SHOW TABLES;

-- Menampilkan semua data dari tabel articles
SELECT * FROM articles;

-- Menambahkan contoh data ke tabel articles
INSERT INTO articles (title, description, content, category, date, author, location) VALUES
    ('api di LA', 'sdff', 'saadads', NULL, '1111-01-01', 'Berita', 'LA', 'https://akcdn.detik.net.id/visual/2025/01/10/jejak-kehancuran-kebakaran-terparah-sepanjang-sejarah-los-angeles-4_169.jpeg?w=650&q=90');

-- Menampilkan semua data dari tabel articles setelah penambahan data
SELECT * FROM articles;

-- Menambahkan kolom link_img ke tabel articles
ALTER TABLE articles ADD link_img TEXT;
