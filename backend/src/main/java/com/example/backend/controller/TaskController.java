package com.example.backend.controller;

import com.example.backend.model.Taskmodel;
import com.example.backend.repository.TaskRepository;
import com.example.backend.service.TaskService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/task")
public class TaskController {
    private final TaskService taskService;


    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    @PostMapping
    public ResponseEntity addTask(@RequestBody Taskmodel taskmodel){
        taskService.addTask(taskmodel);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @PutMapping
    public ResponseEntity updateTask(@RequestBody Taskmodel taskmodel){
        taskService.updateTask(taskmodel);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Taskmodel>> getAllTasks(){
        return ResponseEntity.ok(taskService.getAllTasks());
    }
    @GetMapping("/{title}")
    public ResponseEntity<Taskmodel> getTaskByTitle(@PathVariable String title){
        return ResponseEntity.ok(taskService.getTaskByTitle(title));
    }
    @DeleteMapping
    public ResponseEntity deleteAll(){
        taskService.deleteAllTask();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deleteTask(@PathVariable String id){
        taskService.deleteTask(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
