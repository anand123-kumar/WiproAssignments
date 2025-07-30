package com.junitprograms;


import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class MyCalcTest {

	int first;
	int second;
	int expectedresult;
	MyCalc obj1;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		System.out.println("@RunOnceBeforeClass-Program Started");
	}
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		System.out.println("@RunOnceAfterClass-Program Ended");
	}
	@Before
	public void setUp() throws Exception {
		System.out.println("@Before: start of the test case");
		obj1 = new MyCalc();
		expectedresult = obj1.sum(12, 12);// 24
		System.out.println("@BeforeExpected:: " + expectedresult);
	}
	@After
	public void tearDown() throws Exception {
		System.out.println("@After: END of the test case");
	}

	@Test
	public void test()  
	{
		System.out.println("My First Test Case!");
		MyCalc obj2 = new MyCalc();
		assertEquals(expectedresult, obj2.sum(12, 12));
		System.out.println("@Test(Expectedresult):: " + expectedresult);
		
	}
	
	@Test 
	public void test1()
	{
		System.out.println("Student Test Case!");
		Student s1 = new Student();
		s1.setSid(1001);
		s1.setSname("Thananya");
		assertEquals(1001, s1.getSid());
		assertEquals("Thananya", s1.getSname());
	}

		Division obj = new Division(10, 2);
		Division obj4 = new Division(10, 0);
		@Test 
		public void test4() 
		{
			System.out.println("Division Test Case!");
			assertEquals(5, obj.divide());
		}
	
		@Test(expected=ArithmeticException.class)
		public void test5()
		{
					System.out.println("Division Another Test Case!");
					assertEquals(5,obj4.divide());	
		}
		
		@Test(expected=Exception.class)
		
		public void test6()
		{
			throw new NullPointerException();
		}

		
		
		 

}


