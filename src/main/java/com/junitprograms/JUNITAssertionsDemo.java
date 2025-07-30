package com.junitprograms;

import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertSame;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.Assert;
import org.junit.Test;

public class JUNITAssertionsDemo {
	int num1,num2;
	@Test
	public void mytest1()//test case method
	{
		String obj1="junit";//String pool memory
		String obj2="junit";//String pool memory
		String obj3=new  String("test");//Heap
		String obj4="test";//Pool
		String obj5=null;
		int var1=1;
		int var2=2;
		int[] arithmetic1= {1,2,3,4,5};
		int[] arithmetic2= {1,2,3,4,5};
		Assert.assertEquals(obj3,obj4);//The assertEquals() method compares two objects for equality,//using their equals() method. 
		assertEquals(obj1,obj2);
		//Check if two object references point to the same object TYPE(stack/heap)
		//assertSame(obj3,obj4);//failure  bcos one is heap and another one is pool!
		assertSame(obj1,obj2);
		//Check if two object references not point to the same object type
		assertNotSame(obj3,obj4);//different memory returns true
		//assertNotSame(obj1,obj2);//same memory returns false
		//Check that an object isn't null
		assertNotNull(obj1);
		//Check that an object is null
		assertNull(obj5);
		//Check that a condition is true
		assertTrue(var1 < var2);//1<2
		//Check that a condition is false
		assertFalse(var1 > var2);//1>2
		// Check whether two arrays are 
		//equal to each other.
		assertArrayEquals(arithmetic1,arithmetic2);



	
	}
}

