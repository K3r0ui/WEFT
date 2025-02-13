package com.weft.uttop.fr.weft.Service;


import com.weft.uttop.fr.weft.Exception.ToDoNotFoundException;
import com.weft.uttop.fr.weft.model.ToDo;
import com.weft.uttop.fr.weft.repository.ToDoRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ToDoServiceImpl implements ToDoService {

    private final ToDoRepository toDoRepository;

    @Override
    public ToDo getToDo(long id) {
        return toDoRepository.findById(id)
                .orElseThrow(() -> new ToDoNotFoundException(String.format("ToDo with id '%s' not found", id)));
    }

    @Override
    public List<ToDo> getToDos() {
        return toDoRepository.findAll();
    }

    @Override
    public ToDo addToDo(String description, String user) {
        ToDo toDo = new ToDo();
        toDo.setUser(user);
        toDo.setDescription(description);
        return toDoRepository.save(toDo);
    }

    @Override
    public void deleteToDo(long id) {
        toDoRepository.delete(getToDo(id));
    }

    @Override
    public void updateToDo(long id, boolean completed) {
        ToDo toDo = getToDo(id);
        toDo.setCompleted(completed);
        toDoRepository.save(toDo);
    }
}