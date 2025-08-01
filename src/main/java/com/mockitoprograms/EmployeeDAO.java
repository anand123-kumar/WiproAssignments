package com.mockitoprograms;
import java.util.Collections;
import java.util.List;

public class EmployeeDAO {
	
	private static EmployeeDAO employeeDAO = new EmployeeDAO();


	private EmployeeDAO() {
	}

	
	public static EmployeeDAO getInstance() {
		return employeeDAO;//ONLY STATIC TYPE
	}
	
	public Employee getEmployee(Long employeeId) {
		return null;
	}

	
	public List<Employee> getAll() {
		return Collections.emptyList();
	}

	
	public String addEmployee(Employee employee) {
		return employee.getEmployeeName();//returning empname
	}
	
	
	public String updateEmployee(Employee employee) {
		return employee.getEmployeeName();//returning empname
	}
	
	public String deleteEmployee(Long employeeId) {
		return null;
	}
	public int getPoints(Long employeeId) {
		return 0;
	}
}
