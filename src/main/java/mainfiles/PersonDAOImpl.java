package mainfiles;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

public class PersonDAOImpl implements PersonDAO {
    private JdbcTemplate jdbcTemplate;

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private RowMapper<Person> rowMapper = new RowMapper<Person>() {
        public Person mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new Person(
                rs.getInt("id"),
                rs.getInt("age"),
                rs.getString("firstName"),
                rs.getString("lastName")
            );
        }
    };

    public List<Person> getAllPersons() {
        return jdbcTemplate.query("SELECT * FROM person", rowMapper);
    }

    public Person getPersonById(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM person WHERE id = ?", rowMapper, id);
    }

    public void addPerson(Person person) {
        jdbcTemplate.update("INSERT INTO person (id, age, firstName, lastName) VALUES (?, ?, ?, ?)",
                person.getId(), person.getAge(), person.getFirstName(), person.getLastName());
    }

    public void updatePerson(Person person) {
        jdbcTemplate.update("UPDATE person SET age = ?, firstName = ?, lastName = ? WHERE id = ?",
                person.getAge(), person.getFirstName(), person.getLastName(), person.getId());
    }

    public void deletePerson(int id) {
        jdbcTemplate.update("DELETE FROM person WHERE id = ?", id);
    }
}
