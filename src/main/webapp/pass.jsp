<!-- pass.jsp -->
<%@ page language="java" %>
<%
    String name = (String) request.getAttribute("studentName");
    int marks = (Integer) request.getAttribute("marks");
%>
<html>
<head><title>Pass Page</title></head>
<body>
    <h2>Result</h2>
    <p>Congratulations <b><%= name %></b>, you passed with <b><%= marks %></b> marks!</p>

    <jsp:include page="footer.jsp" />
</body>
</html>
