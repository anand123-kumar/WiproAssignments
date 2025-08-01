package myservletprograms;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
 protected void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     String accNo = request.getParameter("accountNumber");
     String password = request.getParameter("password");

     // Dummy validation
     if(accNo.equals("12345") && password.equals("pass123")) {
         HttpSession session = request.getSession();
         session.setAttribute("name", "Anand Kumar");
         session.setAttribute("balance", 15000.0);

         // Redirect to balance page
         response.sendRedirect("BalanceServlet");
     } else {
         out.println("<h3>Invalid credentials! <a href='Login.html'>Try Again</a></h3>");
     }
 }
}
