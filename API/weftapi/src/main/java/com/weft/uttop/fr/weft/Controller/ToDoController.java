package com.weft.uttop.fr.weft.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.weft.uttop.fr.weft.model.ToDo;
import com.weft.uttop.fr.weft.Service.ToDoService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {

    private final ToDoService toDoService;

    // Get all ToDos
    @GetMapping
    public List<ToDo> getToDos() {
        return toDoService.getToDos();
    }

    // Create a new ToDo
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ToDo addToDo(@RequestBody AddToDoRequest addToDoRequest) {
        return toDoService.addToDo(addToDoRequest.description());
    }

    // Delete a ToDo by ID
    @DeleteMapping("/{id}")
    public void deleteToDo(@PathVariable Long id) {
        toDoService.deleteToDo(id);
    }

    // Update a ToDo completion status
    @PatchMapping("/{id}")
    public void updateToDo(@PathVariable Long id, @RequestParam Boolean completed) {
        toDoService.updateToDo(id, completed);
    }
}
