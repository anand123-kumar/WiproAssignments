package myservletprograms;
//LogoutServlet.java
import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/LoginServlet")
public class LogoutServlet extends HttpServlet {
 protected void doGet(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     HttpSession session = request.getSession(false);
     if (session != null) {
         session.invalidate(); // End session
     }

     out.println("<h3>You have successfully logged out.</h3>");
     out.println("<a href='Login.html'>Login Again</a>");
 }
}
