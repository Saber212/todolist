package com.example.backend.repository;

import com.example.backend.model.Taskmodel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface TaskRepository extends MongoRepository<Taskmodel, String>{
    static void count(org.springframework.data.mongodb.core.query.Query limit, Class<Taskmodel> taskmodelClass) {
    }

    static void find(org.springframework.data.mongodb.core.query.Query query, Class<Taskmodel> taskmodelClass) {
    }

    @Query("{'Title': ?0}")
    Optional<Taskmodel> findbyTitle(String title);
}