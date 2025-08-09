package beanfiles;

public interface JdbcTemplate {

	void update(String sql, int id, int age, String firstName, String lastName);

	void update(String sql, int age, String firstName, String lastName, int id);

}
