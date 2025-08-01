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
		Assert.assertEquals(obj3,obj4);. 
		assertEquals(obj1,obj2);
		
		assertSame(obj1,obj2);
		
		assertNotSame(obj3,obj4);//different memory returns true
		
		assertNotNull(obj1);
		
		assertNull(obj5);
		
		assertTrue(var1 < var2);//1<2
		
		assertFalse(var1 > var2);//1>2
		
		
		assertArrayEquals(arithmetic1,arithmetic2);



	
	}
}

