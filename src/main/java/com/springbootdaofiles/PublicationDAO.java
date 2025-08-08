package com.springbootdaofiles;

import com.springbootbeanfiles.Publication;
import java.util.List;

public interface PublicationDAO {
    int insertPublication(Publication publication);
    List<Publication> getAllPublications();
    Publication getPublicationById(int id);
    int updatePublication(Publication publication);
    int deletePublication(int id);
}
