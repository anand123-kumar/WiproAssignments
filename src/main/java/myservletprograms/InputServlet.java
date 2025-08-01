package myservletprograms;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/input")
public class InputServlet extends HttpServlet {
 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
     // Read form data
     String name = request.getParameter("name");
     String marksStr = request.getParameter("marks");

     // Set attributes to forward
     request.setAttribute("name", name);
     request.setAttribute("marks", marksStr);

     // Forward to GradeServlet
     RequestDispatcher rd = request.getRequestDispatcher("grade");
     rd.forward(request, response);
 }
}