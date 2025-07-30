package com.junitprograms;

import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

import junit.framework.TestResult;
import junit.framework.TestSuite;

public class TestingData {

	public static void main(String[] args) {
		Result rs=JUnitCore.runClasses(MyCalcTest.class);
		for(Failure fa:rs.getFailures())
		{
			System.out.println("Failures:: "+fa);
	
			System.out.println(fa.getMessage());
		}
		if (rs.wasSuccessful()) {
	        System.out.println("All tests finished successfully...");
	    }
		System.out.println("Success?? "+rs.wasSuccessful());
		System.out.println("RunCount?? "+rs.getRunCount());
		TestSuite suiteobj=new TestSuite(JUNITAssertionsDemo.class,MyCalcTest.class);
		TestResult result11 =new TestResult();
		suiteobj.run(result11);
		System.out.println("Test Suite---RunCount?? "+result11.runCount());

	}

}
