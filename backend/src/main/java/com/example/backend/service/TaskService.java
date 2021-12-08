package com.example.backend.service;

import com.example.backend.model.Taskmodel;
import com.example.backend.repository.TaskRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.TextQuery;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }



    public void addTask(Taskmodel taskmodel){
        taskRepository.insert(taskmodel);
    }
    public void updateTask(Taskmodel taskmodel){

        Taskmodel savedTask = taskRepository.findById(taskmodel.getId())
                .orElseThrow(() -> new RuntimeException(String.format("Cannot find Task by ID %s", taskmodel.getId())));

        savedTask.setTitle(taskmodel.getTitle());
        savedTask.setDescription(taskmodel.getDescription());
        savedTask.setDate(taskmodel.getDate());
        savedTask.setStatus(taskmodel.getStatus());

        taskRepository.save(taskmodel);
    }

    public List<Taskmodel> getAllTasks(){
        return taskRepository.findAll();
    }

    public Taskmodel getTaskByTitle(String title){
        return taskRepository.findbyTitle(title).orElseThrow(() -> new RuntimeException(
                String.format("Cannot Find Expense by Title %s", title)));
    }
    public void deleteAllTask(){

        taskRepository.deleteAll();
    }
    public void deleteTask(String id){
        taskRepository.deleteById(id);
    }

    public Page<Taskmodel> listTasksPaginated(Pageable p){
        return taskRepository.findAll(p);
    }
}
