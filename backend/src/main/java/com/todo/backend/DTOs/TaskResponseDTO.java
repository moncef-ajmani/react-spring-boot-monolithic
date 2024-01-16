package com.todo.backend.DTOs;

import com.todo.backend.enums.TaskStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor @AllArgsConstructor
public class TaskResponseDTO {
    private Long id;
    private String title;
    private TaskStatus status;
}
