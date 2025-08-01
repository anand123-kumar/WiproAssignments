package com.mavenprograms;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;




public class JDBCDemo {

	public static void main(String[] args) {
		Connection con=null;
		Statement st=null;
		ResultSet rs=null;
		try
		{
			
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/wipro2025","root","anandkumar@123");
			
			//con=DriverManager.getConnection("jdbc:mysql:@127.0.0.1:3306/wipro","root","");
			st=con.createStatement();//build sql statements
			rs=st.executeQuery("select * from wipro_emps");//ResultSet means rows and columns
			while(rs.next())//iterate the records one by one!
			{
				//EITHER COLUMN NAME OR COLUMN POSITION INDEX 1,2,3....
				int a=rs.getInt("eno");//column name
				String b=rs.getString(2);//2nd column=>name
				float c=rs.getFloat("salary");//float c=rs.getFloat(3);
				String d=rs.getString("dept");

				System.out.println(a+ " "+b + " "+c + " "+d );
				
			}
		}
		catch(Exception e)//SQLException is a checked exception
		{
			e.printStackTrace();
		}

		finally
		{
			try
			{
				if(rs!=null) 
					rs.close();
				if(st!=null)
					st.close();
				if(con!=null)
					con.close();
			}
			catch(Exception e)
			{
				System.out.println("Finally Block::"+e);
			}
		
		}




	}

}
