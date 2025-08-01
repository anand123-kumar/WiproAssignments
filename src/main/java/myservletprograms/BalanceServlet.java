package myservletprograms;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/LoginServlet")
public class BalanceServlet extends HttpServlet {
 protected void doGet(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     HttpSession session = request.getSession(false); 

     if (session != null && session.getAttribute("name") != null) {
         String name = (String) session.getAttribute("name");
         double balance = (Double) session.getAttribute("balance");

         out.println("<html><body>");
         out.println("<h2>Welcome, " + name + "</h2>");
         out.println("<p>Your current balance is: ₹" + balance + "</p>");
         out.println("<br><a href='LogoutServlet'>Logout</a>");
         out.println("</body></html>");
     } else {
         out.println("<h3>Session expired or not logged in. <a href='Login.html'>Login again</a></h3>");
     }
 }
}
