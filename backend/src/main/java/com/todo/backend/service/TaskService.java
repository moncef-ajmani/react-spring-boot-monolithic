package com.todo.backend.service;

import com.todo.backend.DTOs.*;
import com.todo.backend.entity.Task;
import com.todo.backend.entity.User;
import com.todo.backend.enums.TaskStatus;
import com.todo.backend.repository.TaskRepository;
import com.todo.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final JwtService jwtService;


    private User getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();

        return user;
    }
    public TasksResponseDTO getTasks(){

        Long id = getUser().getId();

        List<TaskResponseDTO> taskList = new ArrayList<>();

        for(Task task: taskRepository.findAll()){
            if(Objects.equals(task.getUser().getId(), id)){
                TaskResponseDTO taskDTO = TaskResponseDTO
                        .builder()
                        .id(task.getId())
                        .title(task.getTitle())
                        .status(task.getStatus())
                        .build();

                taskList.add(taskDTO);
            }
        }
        return TasksResponseDTO.builder()
                .tasks(taskList)
                .build();
    }
    public TaskResponseDTO addTask(TaskRequestDTO taskRequestDTO){
        User user = getUser();
        System.out.println(user);
        Task task = Task
                .builder()
                .id(taskRequestDTO.getId())
                .title(taskRequestDTO.getTitle())
                .status(TaskStatus.INPROGRESS)
                .created_at(new Date())
                .user(user)
                .build();
        Task new_task = taskRepository.save(task);
        return TaskResponseDTO
                .builder()
                .title(new_task.getTitle())
                .status(new_task.getStatus())
                .id(new_task.getId())
                .build();

    }


    public TaskResponseDTO updateTitle(Long id, UpdateTitleRequestDTO updateTitleRequestDTO){
        User user = getUser();
        System.out.println(user);
        Task task = taskRepository.findById(id).get();
        String title = updateTitleRequestDTO.getTitle();
        System.out.println(task);

        if(Objects.equals(task.getUser().getId(), user.getId())){
            task.setTitle(title);
            taskRepository.save(task);
            return TaskResponseDTO
                    .builder()
                    .title(task.getTitle())
                    .status(task.getStatus())
                    .id(task.getId())
                    .build();
        }
        return null;
    }
    public TaskResponseDTO updateStatus(Long id, UpdateStatusRequestDTO updateStatusRequestDTO){
        User user = getUser();
        String status = updateStatusRequestDTO.getStatus();
        System.out.println(status);
        Task task = taskRepository.findById(id).get();
        System.out.println(task);

        if(Objects.equals(task.getUser().getId(), user.getId())){
            if(Objects.equals(status, "COMPLETED")){
                   task.setStatus(TaskStatus.COMPLETED);
            }else if(Objects.equals(status, "INPROGRESS")){
                task.setStatus(TaskStatus.INPROGRESS);
            }else{
                return null;
            }
            taskRepository.save(task);
            return TaskResponseDTO
                    .builder()
                    .title(task.getTitle())
                    .status(task.getStatus())
                    .id(task.getId())
                    .build();
        }
        return null;
    }

    public ResponseEntity deleteTask(Long id){
        User user = getUser();
        System.out.println(user);
        Task task = taskRepository.findById(id).get();

        if(Objects.equals(task.getUser().getId(), user.getId())){
            taskRepository.delete(task);
            return ResponseEntity.ok().body("Deleted Successfully");
        }

        return ResponseEntity.badRequest().body("Error deleting a task");
    }

}
