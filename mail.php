<?php

$errore = "";
$messaggio = "";

if( $_POST) {

if(!$_POST['username']){

  $errore = "Devi inserire il tuo nome.";
}

if(!$_POST['usermail']){

  $errore = "Devi inserire un indirizzo mail valido.";
}

if(!$_POST['usertext']){

  $errore = "Devi scrivere un messaggio";
}

  if($_POST['usermail'] && filter_var($_POST['usermail'] , FILTER_VALIDATE_EMAIL)  === false) {

$errore = "La mail inserita non è valida!";
  }

if($errore != ""){

$errore = "OOPS, c'è qualcosa da sistemare: " . $errore;

} else{

  $mastermail = $_POST['mastermail'];
  $username = $_POST['username'] . " ha scritto da www.luciadesign.it";
  $usertext = $_POST['usertext'];
  $headers = "From: " . $_POST['usermail'];
  //funzione mail
  if(mail($mastermail, $username, $usertext, $headers)){

$messaggio = "Grazie per avermi contattato! Riceverai una risposta entro 24h.";

}else{

$messaggio = "Errore nell'invio!";
}
}

}

echo $errore . $messaggio;

?>
