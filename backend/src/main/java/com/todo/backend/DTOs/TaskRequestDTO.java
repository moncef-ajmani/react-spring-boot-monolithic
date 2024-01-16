package com.todo.backend.DTOs;

import com.todo.backend.enums.TaskStatus;
import lombok.Data;

@Data
public class TaskRequestDTO {
    private String title;
}
