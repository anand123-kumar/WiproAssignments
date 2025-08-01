package myservletprograms;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ViewCartServlet extends HttpServlet {
 protected void doGet(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     Cookie[] cookies = request.getCookies();

     out.println("<h2>Your Cart Items:</h2>");
     if (cookies != null) {
         boolean found = false;
         for (Cookie c : cookies) {
             if (c.getName().startsWith("item")) {
                 out.println("<p>" + c.getValue() + "</p>");
                 found = true;
             }
         }
         if (!found) out.println("<p>Your cart is empty.</p>");
     } else {
         out.println("<p>No items in cart.</p>");
     }
     out.println("<br><a href='Shop.html'>Back to Shop</a>");
 }
}
