<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Serveur SMTP (ici Gmail en exemple, tu peux changer)
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'joaofarias115l@gmail.com'; // ton email Gmail
        $mail->Password   = 'nspi iqoc vlfd hftm';      // mot de passe d'application généré        
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Destinataires
        $mail->setFrom('joaofarias115l@gmail.com', 'Sena Électricité');
        $mail->addAddress('joaofarias115l@gmail.com'); // où tu veux recevoir

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message depuis votre site';
        $mail->Body    = "<b>Nom :</b> $name<br><b>Email :</b> $email<br><b>Message :</b><br>$message";

        $mail->send();
        echo 'Message envoyé avec succès !';
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi : {$mail->ErrorInfo}";
    }
} else {
    echo "Méthode invalide.";
}


// nspi iqoc vlfd hftm 