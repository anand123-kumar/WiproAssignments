package myservletprograms;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AddToCartServlet extends HttpServlet {
 protected void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     String item = request.getParameter("item");
     Cookie cookie = new Cookie("item" + System.currentTimeMillis(), item);
     cookie.setMaxAge(60 * 60); // 1 hour
     response.addCookie(cookie);

     response.setContentType("text/html");
     PrintWriter out = response.getWriter();
     out.println("<h3>Item added to cart: " + item + "</h3>");
     out.println("<a href='Shop.html'>Add More</a> | <a href='ViewCartServlet'>View Cart</a>");
 }
}
