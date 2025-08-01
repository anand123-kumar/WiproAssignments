package myservletprograms;
//ReceiptServlet.java
import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/ReceipServlet")
public class ReceiptServlet extends HttpServlet {
 public void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     String productName = request.getParameter("productName");
     int price = Integer.parseInt(request.getParameter("price"));
     int quantity = Integer.parseInt(request.getParameter("quantity"));

     int total = price * quantity;

     out.println("<html><body>");
     out.println("<h2>Receipt</h2>");
     out.println("<p>Product: " + productName + "</p>");
     out.println("<p>Price per Unit: ₹" + price + "</p>");
     out.println("<p>Quantity: " + quantity + "</p>");
     out.println("<p><strong>Total: ₹" + total + "</strong></p>");
     out.println("</body></html>");
 }
}
