<!-- form.jsp -->
<!DOCTYPE html>
<html>
<head>
    <title>Student Result Form</title>
</head>
<body>
    <h2>Enter Student Details</h2>
    <form action="checkResult.jsp" method="post">
        Name: <input type="text" name="studentName" required><br><br>
        Marks: <input type="number" name="marks" required><br><br>
        <input type="submit" value="Check Result">
    </form>
</body>
</html>
