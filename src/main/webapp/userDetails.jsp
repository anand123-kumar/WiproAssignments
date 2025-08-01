<!-- userDetails.jsp -->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>User Submitted Data</title>
</head>
<body>
    <h2>User Submitted Information</h2>
    <p><strong>User Name:</strong> ${param.username}</p>
    <p><strong>Password:</strong> ${param.password}</p>
    <p><strong>Address:</strong> ${param.address}</p>
    <p><strong>Subscribed to Newsletter:</strong> 
        <c:choose>
            <c:when test="${param.subscribe == 'yes'}">Yes</c:when>
            <c:otherwise>No</c:otherwise>
        </c:choose>
    </p>

    <p><strong>Favorite Web Frameworks:</strong><br>
        <c:forEach var="fw" items="${paramValues.framework}">
            ${fw}<br>
        </c:forEach>
    </p>

    <p><strong>Gender:</strong> ${param.gender}</p>
    <p><strong>Favorite Number:</strong> ${param.favNumber}</p>
</body>
</html>
