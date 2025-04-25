<?php
include 'db.php';

$title = $_POST['title'];
$content = $_POST['content'];
$author = $_POST['author'];

if ($title && $content && $author) {
    $stmt = $pdo->prepare("INSERT INTO posts (title, content, author) VALUES (:title, :content, :author)");
    $stmt->execute([':title' => $title, ':content' => $content, ':author' => $author]);
    echo "게시물이 저장되었습니다.";
} else {
    echo "모든 필드를 입력해주세요.";
}
?>
