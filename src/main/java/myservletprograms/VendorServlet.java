package myservletprograms;

import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class VendorServlet extends HttpServlet {
 protected void doGet(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException {
     response.setContentType("text/html");
     PrintWriter out = response.getWriter();

     String jdbcUrl = "jdbc:mysql://localhost:3306/shopdb";
     String username = "root"; 
     String password = "anandkumar@123";

     try {
         Class.forName("com.mysql.cj.jdbc.Driver");
         Connection con = DriverManager.getConnection(jdbcUrl, username, password);
         Statement stmt = con.createStatement();
         ResultSet rs = stmt.executeQuery("SELECT * FROM vendor");

         out.println("<h2>Vendor Records</h2>");
         out.println("<table border='1'><tr><th>ID</th><th>Name</th><th>City</th></tr>");
         while (rs.next()) {
             out.println("<tr>");
             out.println("<td>" + rs.getInt("id") + "</td>");
             out.println("<td>" + rs.getString("name") + "</td>");
             out.println("<td>" + rs.getString("city") + "</td>");
             out.println("</tr>");
         }
         out.println("</table>");

         rs.close();
         stmt.close();
         con.close();
     } catch (Exception e) {
         out.println("<p>Error: " + e.getMessage() + "</p>");
         e.printStackTrace(out);
     }
 }
}
