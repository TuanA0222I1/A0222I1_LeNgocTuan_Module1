<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: USER
  Date: 9/19/2022
  Time: 8:55 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
</head>
<body>
Index here
<form method="get" action="/create">
    <input type="text" name="name_hello">
    <button type="submit">submit</button>
</form>

<c:if test="${! empty message}">
    <h3>${message}</h3>
</c:if>
</body>
</html>
