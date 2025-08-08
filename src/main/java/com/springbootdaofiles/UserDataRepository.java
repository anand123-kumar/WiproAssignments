package com.springbootdaofiles;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springbootbeanfiles.UserData;

public interface UserDataRepository extends JpaRepository<UserData, Long> {
}
