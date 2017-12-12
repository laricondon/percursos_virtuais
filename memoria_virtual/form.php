

    <?

    $destinatario = "percursosvirtuais@gmail.com";

    $nome = $_REQUEST['nome'];
    $email = $_REQUEST['email'];
    $mensagem = $_REQUEST['mensagem'];
    $assunto = $_REQUEST['assunto'];

     // monta o e-mail na variavel $body


    $body = $body . "Nome: " . $nome . "\n";
    $body = $body . "Email: " . $email . "\n";
    $body = $body . "Mensagem: " . $mensagem . "\n\n";


  
    mail($destinatario, $assunto , $body, "From: $email\r\n");

    // redireciona para a página de obrigado
    header("location:obrigado.html");


    ?>
