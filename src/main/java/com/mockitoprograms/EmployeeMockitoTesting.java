package com.mockitoprograms;

import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(MockitoJUnitRunner.class)
public class EmployeeMockitoTesting {
	private static EmployeeDAO mockEmployeeDAO;//MOCKING STUB OR MOCKING CLASS or PROXY CLASS
	private static Employee emp1;
	private static Employee emp2;
	@BeforeClass//NO @Mock @InitMocks
	public static void init_1()
	{
		// set EmployeeDAO mock object
		mockEmployeeDAO = Mockito.mock(EmployeeDAO.class);
		// create an Employee object
		emp1 = new Employee(1001L, "Raja", "Male",4);

		// create another Employee object
		emp2 = new Employee(1002L, "Thananya", "Female",7);
	
		// stubbing CONDITION is done for test cases
					when(mockEmployeeDAO.getAll()).thenReturn(Arrays.asList(emp1, emp2));
					when(mockEmployeeDAO.getEmployee(1001L)).thenReturn(emp1);
					when(mockEmployeeDAO.addEmployee(emp2)).thenReturn(emp2.getEmployeeName());
					when(mockEmployeeDAO.updateEmployee(emp2)).thenReturn(emp2.getEmployeeName());
		
					// we are calling twice and see that always second call wins
					when(mockEmployeeDAO.deleteEmployee(1001L)).thenReturn("DELETED");
					when(mockEmployeeDAO.deleteEmployee(1001L)).thenReturn("REMOVED");
					
					/*
					 * when chaining is to be done. We can also use: * when(mockEmployeeDAO.getPoints(1001L)).thenReturn(2,4,9);
					 */
					when(mockEmployeeDAO.getPoints(1001L)).thenReturn(2).thenReturn(4).thenReturn(9);		
	}
	
	@Test
	public void getAllTest() {
		List<Employee> allEmployees = mockEmployeeDAO.getAll();//2 EMP OBJECTS
		assertNotNull(allEmployees);
		assertEquals(2, allEmployees.size());//2,2
	}

	@Test
	public void getEmployeeTest() {
		Long employeeId = 1001L;
		Employee employee = mockEmployeeDAO.getEmployee(employeeId);
		assertNotNull(employee);
		assertEquals(Long.valueOf("1001"), employee.getEmployeeId());
		assertEquals("Raja", employee.getEmployeeName());
		assertEquals("Male", employee.getGender());
	}
	@Test
	public void addEmployeeTest() {
		String employeeName = mockEmployeeDAO.addEmployee(emp2);//1002
		assertNotNull(employeeName);
		assertEquals("Thananya", employeeName);
	}
	@Test
	public void deleteEmployeeTest() {
		String status = mockEmployeeDAO.deleteEmployee(1001L);
		assertEquals("REMOVED", status);
	}
	@Test
	public void multipleCallsTest() {
		int points = mockEmployeeDAO.getPoints(1001L);
		System.out.println(points);//2

		points = mockEmployeeDAO.getPoints(1002L);
		System.out.println(points);//0

		points = mockEmployeeDAO.getPoints(1001L);
		System.out.println(points);//4

		points = mockEmployeeDAO.getPoints(1001L);
		System.out.println(points);//9

		points = mockEmployeeDAO.getPoints(1001L);
		System.out.println(points);//9
	}

}

