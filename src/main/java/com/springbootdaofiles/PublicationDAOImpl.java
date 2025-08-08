package com.springbootdaofiles;

import com.springbootbeanfiles.Publication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PublicationDAOImpl implements PublicationDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int insertPublication(Publication publication) {
        String sql = "INSERT INTO book (bookid, bookname, author, price) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, publication.getBookid(), publication.getBookname(), publication.getAuthor(), publication.getPrice());
    }

    @Override
    public List<Publication> getAllPublications() {
        return jdbcTemplate.query("SELECT * FROM book", new BeanPropertyRowMapper<>(Publication.class));
    }

    @Override
    public Publication getPublicationById(int id) {
        String sql = "SELECT * FROM book WHERE bookid=?";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Publication.class), id);
    }

    @Override
    public int updatePublication(Publication publication) {
        String sql = "UPDATE book SET bookname=?, author=?, price=? WHERE bookid=?";
        return jdbcTemplate.update(sql, publication.getBookname(), publication.getAuthor(), publication.getPrice(), publication.getBookid());
    }

    @Override
    public int deletePublication(int id) {
        return jdbcTemplate.update("DELETE FROM book WHERE bookid=?", id);
    }
}
