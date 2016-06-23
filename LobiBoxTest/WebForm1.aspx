<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="LobiBoxTest.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script
		src="https://code.jquery.com/jquery-2.2.3.min.js"
		integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="
		crossorigin="anonymous">
    </script>
    
    <link href="css/lobibox.css" rel="stylesheet" />
    <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/animate.css" rel="stylesheet" />
    
    <%--<script src="lib/jquery.1.11.min.js"></script>--%>
    <script src="js/lobibox.js"></script>


    <script src="js/test.js"></script>
    <script src="js/messagePanel.js"></script>

</head>
<body>
    <form id="form1" runat="server">
    <div>
        <br />
        <button type="button" id="btnMessage">Message Box</button>

        <select id="selectOption">
          <option value="confirm">Confirm</option>
          <option value="success">Success</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
        <select id="selectOption2">
          <option value="messagebox">MessageBox</option>
          <option value="notification">Notification Bar</option>
        </select>

        <button type="button" id="btnChange">Change Containar</button>

        <div id="myDiv" style="width:500px; height:400px; border:1px solid black;">                   
        </div>
    </div>
    </form>
</body>
</html>
