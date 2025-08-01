package myservletprograms;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/input")
public class InputServlet extends HttpServlet {
 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   
     String name = request.getParameter("name");
     String marksStr = request.getParameter("marks");

    
     request.setAttribute("name", name);
     request.setAttribute("marks", marksStr);

   
     RequestDispatcher rd = request.getRequestDispatcher("grade");
     rd.forward(request, response);
 }
}
