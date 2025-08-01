<!-- userForm.jsp -->
<html>
<head>
    <title>User Information</title>
</head>
<body>
    <h2>User Information Form</h2>
    <form action="userDetails.jsp" method="post">
        <label>User Name:</label>
        <input type="text" name="username" value="Mahesh" /><br><br>

        <label>Password:</label>
        <input type="password" name="password" /><br><br>

        <label>Address:</label>
        <textarea name="address">Sample Address</textarea><br><br>

        <label>Subscribe Newsletter:</label>
        <input type="checkbox" name="subscribe" value="yes" /> Yes<br><br>

        <label>Favorite Web Frameworks:</label><br>
        <input type="checkbox" name="framework" value="Spring MVC" /> Spring MVC<br>
        <input type="checkbox" name="framework" value="Struts 1" /> Struts 1<br>
        <input type="checkbox" name="framework" value="Struts 2" /> Struts 2<br>
        <input type="checkbox" name="framework" value="Apache Wicket" /> Apache Wicket<br><br>

        <label>Gender:</label><br>
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female<br><br>

        <label>Favorite Number:</label>
        <select name="favNumber">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select><br><br>

        <input type="submit" value="Submit" />
    </form>
</body>
</html>
