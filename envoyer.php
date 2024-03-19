<?php

ini_set("SMTP", "smtp.gmail.com");
ini_set("smtp_port", "587");
ini_set("sendmail_from", "evanmoulin25@gmail.com");
ini_set("sendmail_path", "/usr/sbin/sendmail -t -i");



if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Vérifier si les champs requis sont présents
    if (!isset($_POST['email'], $_POST['object'], $_POST['message'])) {
        http_response_code(400);
        exit("Tous les champs sont requis.");
    }

    $to = "evanmoulin25@gmail.com";
    $subject = $_POST['object'];
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'] . "\r\n" .
               "Reply-To: " . $_POST['email'] . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Vérifier si les variables sont vides
    if (empty($to) || empty($subject) || empty($message)) {
        http_response_code(400);
        exit("Tous les champs doivent être renseignés.");
    }

    // Vérifier si l'email est valide
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        exit("L'adresse email n'est pas valide.");
    }

    // Envoyer l'email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "Message envoyé avec succès.";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi du message. Veuillez réessayer.";
    }
} else {
    http_response_code(405);
    exit("Méthode non autorisée.");
}
?>

