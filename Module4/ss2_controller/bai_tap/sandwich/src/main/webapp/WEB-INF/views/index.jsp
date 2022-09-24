<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: USER
  Date: 8/21/2022
  Time: 10:11 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
</head>
<body>
<form action="/insert-sandwich">
    <fieldset>
        <legend>Sandwich</legend>
        <table>
            <tr>
                <td><input type="checkbox" value="lettuce" name="condiment">Lettuce</td>
            </tr>
            <tr>
                <td><input type="checkbox" value="tomato" name="condiment">Tomato</td>
            </tr>
            <tr>
                <td><input type="checkbox" value="mustard" name="condiment">Mustard</td>
            </tr>
            <tr>
                <td><input type="checkbox" value="sprouts" name="condiment">Sprouts</td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </fieldset>
</form>
<c:if test="${message!=null}">
    <h1>${message}</h1>
</c:if>
</body>
</html>
