package myservletprograms;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
     // Set response type
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     // Read form data
     String name = request.getParameter("name");
     String email = request.getParameter("email");
     String gender = request.getParameter("gender");
     String course = request.getParameter("course");

     // Display the submitted data
     out.println("<html><body>");
     out.println("<h2>Registration Details</h2>");
     out.println("<p>Name: " + name + "</p>");
     out.println("<p>Email: " + email + "</p>");
     out.println("<p>Gender: " + gender + "</p>");
     out.println("<p>Course: " + course + "</p>");
     out.println("</body></html>");
 }
}
