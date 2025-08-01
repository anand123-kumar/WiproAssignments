<!-- fail.jsp -->
<%@ page language="java" %>
<%
    String name = (String) request.getAttribute("studentName");
    int marks = (Integer) request.getAttribute("marks");
%>
<html>
<head><title>Fail Page</title></head>
<body>
    <h2>Result</h2>
    <p>Sorry <b><%= name %></b>, you failed with <b><%= marks %></b> marks.</p>

    <jsp:include page="footer.jsp" />
</body>
</html>
