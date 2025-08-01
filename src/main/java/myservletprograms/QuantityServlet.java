package myservletprograms;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/QuantityServlet")
public class QuantityServlet extends HttpServlet {
 public void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     String productData = request.getParameter("product"); // Format: name-price
     String[] parts = productData.split("-");
     String productName = parts[0];
     String price = parts[1];

     out.println("<html><body>");
     out.println("<h2>Enter Quantity for " + productName + "</h2>");
     out.println("<form action='ReceiptServlet' method='post'>");
     out.println("Quantity: <input type='number' name='quantity' required><br><br>");

     // Hidden Fields
     out.println("<input type='hidden' name='productName' value='" + productName + "'>");
     out.println("<input type='hidden' name='price' value='" + price + "'>");

     out.println("<input type='submit' value='Generate Receipt'>");
     out.println("</form>");
     out.println("</body></html>");
 }
}
