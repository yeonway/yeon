<?php
$host = 'localhost'; // NAS의 MariaDB 호스트
$dbname = 'board';   // 사용할 데이터베이스 이름
$username = 'root';  // MariaDB 사용자 이름
$password = 'password'; // MariaDB 비밀번호

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
