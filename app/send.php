<?  
$strTo = "kedevra@bk.ru";
$strSubject = "Загружена фотография!";
$strMessage = nl2br($_POST["txtDescription"]);  
  
//*** Uniqid Session ***//  
$strSid = md5(uniqid(time()));  
  
$strHeader = "";  
$strHeader .= "From: ".$_POST["txtFormName"]."<".$_POST["txtFormEmail"].">\nReply-To: ".$_POST["txtFormEmail"]."";  
  
$strHeader .= "MIME-Version: 1.0\n";  
$strHeader .= "Content-Type: multipart/mixed; boundary=\"".$strSid."\"\n\n";  
$strHeader .= "This is a multi-part message in MIME format.\n";  
  
$strHeader .= "--".$strSid."\n";  
$strHeader .= "Content-type: text/html; charset=utf-8\n";  
$strHeader .= "Content-Transfer-Encoding: 7bit\n\n";  
$strHeader .= $strMessage."\n\n";  
  
//*** Attachment ***//  
if($_FILES["fileAttach"]["name"] != "")  
{  
$strFilesName = $_FILES["fileAttach"]["name"];  
$strContent = chunk_split(base64_encode(file_get_contents($_FILES["fileAttach"]["tmp_name"])));  
$strHeader .= "--".$strSid."\n";  
$strHeader .= "Content-Type: application/octet-stream; name=\"".$strFilesName."\"\n";  
$strHeader .= "Content-Transfer-Encoding: base64\n";  
$strHeader .= "Content-Disposition: attachment; filename=\"".$strFilesName."\"\n\n";  
$strHeader .= $strContent."\n\n";  
}
  
$flgSend = @mail($strTo,$strSubject,null,$strHeader);  // @ = No Show Error //  
  
if($flgSend)  
{  
echo "";  
}  
else  
{  
echo "Возникла ошибка! Макет не загружен";  
}  
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Фотография загружена!</title>
        <link rel="stylesheet" href="assets/css/send.css">
        

    </head>

    <body>
      
                <div class="Dad">
                    <div class="Son">
                    <h1>Ваша заказ отправлен!</h1>
                    <h2>Сейчас с Вами свяжется менеджер</h2>
                    </div>
                </div>
       
       
        <script type="text/javascript">
            setTimeout('location.replace("/index.html")', 3000);
            
        </script>

    </body>

    </html>