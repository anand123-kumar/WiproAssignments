<!-- productDisplay.jsp -->
<%@ page import="myjspprograms.Product" %>
<jsp:useBean id="product" class="myjspprograms.Product" scope="request" />
<jsp:setProperty name="product" property="*" />

<html>
<head>
    <title>Product Details</title>
</head>
<body>
    <h2>Product Information</h2>
    <p><strong>Product ID:</strong> <jsp:getProperty name="product" property="productId" /></p>
    <p><strong>Name:</strong> <jsp:getProperty name="product" property="name" /></p>
    <p><strong>Price:</strong> <jsp:getProperty name="product" property="price" /></p>
    <p><strong>Quantity:</strong> <jsp:getProperty name="product" property="quantity" /></p>
</body>
</html>
