package com.junitprograms;
import java.util.ArrayList;
import java.util.List;

public class ArraylistTestingDemo {
	private List<String> employees = new ArrayList<String>();  

	public void add_1(String name) 
	{  
        employees.add(name);  
    }  
    public void removeAll_1()
    {  
        employees.clear();  
    }  

    public int sizeOfEmployee_1() 
    {  
        return employees.size();  
    }	

    public void remove_1(String name) 
    {  
        employees.remove(name);  
    }  


}