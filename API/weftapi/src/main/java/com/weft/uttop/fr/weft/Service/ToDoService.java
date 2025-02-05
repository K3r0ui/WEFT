package com.weft.uttop.fr.weft.Service;

import com.weft.uttop.fr.weft.model.ToDo;

import java.util.List;

public interface ToDoService {

    ToDo getToDo(long id);

    List<ToDo> getToDos();

    ToDo addToDo(String description);

    void deleteToDo(long id);

    void updateToDo(long id, boolean completed);
}