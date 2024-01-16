package com.todo.backend.web;

import com.todo.backend.DTOs.TaskRequestDTO;
import com.todo.backend.DTOs.TaskResponseDTO;
import com.todo.backend.DTOs.TasksResponseDTO;
import com.todo.backend.entity.Task;
import com.todo.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<TasksResponseDTO> getTasks(){
        return ResponseEntity.ok(taskService.getTasks());
    }

    @PostMapping
    public ResponseEntity<TaskResponseDTO> addTask(@RequestBody TaskRequestDTO taskRequestDTO){
        return ResponseEntity.ok(taskService.addTask(taskRequestDTO));
    }

    @PatchMapping("/{id}/updateTitle")
    public ResponseEntity<Object> updateTaskTitle(@PathVariable Long id,@RequestBody String title){
        TaskResponseDTO taskResponseDTO = taskService.updateTitle(id,title);
        if (taskResponseDTO != null){
            return ResponseEntity.ok(taskResponseDTO);
        }
        return ResponseEntity.badRequest().body("Invalid Request");
    }
    @PatchMapping("/{id}/updateStatus")
    public ResponseEntity<Object> updateTaskStatus(@PathVariable Long id,@RequestBody String status){
        TaskResponseDTO taskResponseDTO = taskService.updateStatus(id,status);
        if (taskResponseDTO != null){
            return ResponseEntity.ok(taskResponseDTO);
        }
        return ResponseEntity.badRequest().body("Invalid Request");
    }
}
