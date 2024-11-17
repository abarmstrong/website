<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Contact Details From Website</title>
</head>
<body>
<%
Set myMail=CreateObject("CDO.Message")
myMail.Subject= "Contact Details"
myMail.From= "designs.sucheta@gmail.com"
myMail.To= "designs.sucheta@gmail.com"
myMail.HTMLBody = "<table>" &_
				  "<tr><b>Contact Details</b></tr>" &_
                  "<tr><td>Name </td><td>:</td><td>" + Request.Form("fname") + "</td></tr>" &_	
				  "<tr><td>Email </td><td>:</td><td>" + Request.Form("email") +"</td></tr>" &_			 
				  "<tr><td>Telephone No. </td><td>:</td><td>" + Request.Form("tel") + "</td></tr>" &_
				  "<tr><td>City </td><td>:</td><td>" + Request.Form("city") + "</td></tr>" &_
				  "<tr><td>Country </td><td>:</td><td>" + Request.Form("country") + "</td></tr>" &_
				  "<tr><td>Description </td><td>:</td><td>" + Request.Form("dec") + "</td></tr>" &_
                  "</table>"

myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing")=2
'Name or IP of remote SMTP server
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver")="127.0.0.1"
'Server port
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25 
myMail.Configuration.Fields.Update


myMail.Send
set myMail=nothing
Response.Redirect("http://www.designsbysucheta.com")
%>
</body>
</html>