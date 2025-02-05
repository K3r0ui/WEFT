package com.weft.uttop.fr.weft.repository;

import com.weft.uttop.fr.weft.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
}