package myservletprograms;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/grade")
public class GradeServlet extends HttpServlet {
 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
     // Set response type
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     // Retrieve forwarded data
     String name = (String) request.getAttribute("name");
     int marks = Integer.parseInt((String) request.getAttribute("marks"));

     // Grade logic
     String grade;
     if (marks >= 90) grade = "A";
     else if (marks >= 75) grade = "B";
     else if (marks >= 60) grade = "C";
     else if (marks >= 40) grade = "D";
     else grade = "F";

     // Display result
     out.println("<html><body>");
     out.println("<h2>Student Result</h2>");
     out.println("<p>Name: " + name + "</p>");
     out.println("<p>Marks: " + marks + "</p>");
     out.println("<p>Grade: " + grade + "</p>");
     out.println("</body></html>");
 }
}