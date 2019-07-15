<%--
  Created by IntelliJ IDEA.
  User: furka
  Date: 10.07.2019
  Time: 10:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link href="../../css/error.css" rel="stylesheet"/>
    <link href="../../css/form-elements.css" rel="stylesheet"/>
    <title>Error Page</title>
</head>
<body>
<div class="error-container">
    <h1>Something bad happened<span>😢</span></h1>
    <ul class="error-list">
        <li class="error-item">
            <strong>Servlet Name</strong>
            <span> = ${servletName}</span>
        </li>
        <li class="error-item">
            <strong>Status Code</strong>
            <span> = ${statusCode}</span>
        </li>
    </ul>
    <a href="/">Go to Home😉</a>
</div>
</body>
</html>
