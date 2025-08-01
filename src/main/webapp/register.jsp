<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<body>
    <h2>User Registration Form</h2>
    <form action="register" method="post">
        Full name: <input type="text" name="fullname" required><br><br>
        E-mail: <input type="email" name="email" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        Birthday (yyyy-mm-dd): <input type="date" name="birthday"><br><br>

        Gender:
        <input type="radio" name="gender" value="Male" checked> Male
        <input type="radio" name="gender" value="Female"> Female <br><br>

        Profession:
        <select name="profession">
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Tester">Tester</option>
        </select><br><br>

        Married?
        <input type="checkbox" name="married" value="Yes"> Yes <br><br>

        Note:<br>
        <textarea name="note" rows="4" cols="30"></textarea><br><br>

        <input type="submit" value="Register">
    </form>
</body>
</html>