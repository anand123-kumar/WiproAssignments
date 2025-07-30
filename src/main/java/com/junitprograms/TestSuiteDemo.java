package com.junitprograms;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses
(
		{
			JUNITAssertionsDemo.class,
			MyCalcTest.class
		}
)

public class TestSuiteDemo {

}

