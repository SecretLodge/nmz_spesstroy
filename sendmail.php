<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);

    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('TDNMZSITE@MAIL.RU', 'Сайт «НМЗ СПЕЦСТРОЙ»');

    // Кому отправить
    $mail->addAddress('OOO.TDNMZ@INBOX.RU');

    // Тема письма
    $mail->Subject = 'Новая заявка с сайта ООО «НМЗ СПЕЦСТРОЙ»!"';

    // Тело письма
    $body = '<h1>Содержание заявки</h1>';

    if(trim(!empty($_POST['name']))) {
        $body .= '<p><strong>Имя:</strong>' .$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body.= '<p><strong>E-mail:</strong>' .$_POST['email'].'</p>';
    }

    if(trim(!empty($_POST['number']))){
        $body .= '<p><strong>Телефон:</strong>' .$_POST['number'].'</p>';
    }

    if(trim(!empty($_POST['company']))){
        $body .= '<p><strong>Компания:</strong>' .$_POST['company'].'</p>';
    }

    if(trim(!empty($_POST['message']))) {
        $body .= '<p><strong>Сoобшение:</strong>' .$_POST['message'].'</p>';
    }


    $mail->Body = $body;
    
    // Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>