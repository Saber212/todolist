package com.example.backend.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

public class Taskmodel{
    @Id
    private String id;
    private String Title;
    private String Description;
    private String date;
    private Boolean status;

    public Taskmodel() {
    }

    public Taskmodel(String id, String title, String description, String date, Boolean status) {
        this.id = id;
        Title = title;
        Description = description;
        this.date = date;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Taskmodel{" +
                "id='" + id + '\'' +
                ", Title='" + Title + '\'' +
                ", Description='" + Description + '\'' +
                ", date='" + date + '\'' +
                ", status=" + status +
                '}';
    }

}
