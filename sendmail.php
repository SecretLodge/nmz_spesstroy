<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);

    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    $mail->Host = 'mail.hosting.reg.ru';  
    $mail->SMTPAuth = true;               
    $mail->Username = 'pass';             
    $mail->Password = 'pass';             
    $mail->SMTPSecure = 'tls';            
    $mail->Port = 465;                

    //От кого письмо
    $mail->setFrom('pass', 'pass');

    // Кому отправить
    $mail->addAddress('pass');

    // Тема письма
    $mail->Subject = 'pass';

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