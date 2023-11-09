package com.pesto.todo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.pesto.todo.controller.TaskController;
import com.pesto.todo.models.Task;
import com.pesto.todo.service.TaskService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.ArgumentMatchers.any;


import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@WebMvcTest(TaskController.class)
public class TaskControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;

    @Test
    @WithMockUser
    public void shouldReturnAllTasks() throws Exception {
        List<Task> allTasks = Arrays.asList(new Task(), new Task());
        when(taskService.findAllTasks()).thenReturn(allTasks);

        mockMvc.perform(get("/api/tasks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(allTasks.size())));
    }

    @Test
    @WithMockUser
    public void shouldReturnTaskById() throws Exception {
        Task task = new Task(1L, "Title", "Description", "TO_DO");
        when(taskService.findTaskById(1L)).thenReturn(Optional.of(task));

        mockMvc.perform(get("/api/tasks/{id}", 1L))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title", is(task.getTitle())));
    }

    @Test
    @WithMockUser
    public void shouldReturnNotFoundWhenTaskDoesNotExist() throws Exception {
        when(taskService.findTaskById(1L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/tasks/{id}", 1L))
                .andExpect(status().isNotFound());
    }

    @Test
    @WithMockUser
    public void shouldCreateTask() throws Exception {
        Task taskToCreate = new Task(null, "New Task", "Description", "TO_DO");
        Task savedTask = new Task(1L, "New Task", "Description", "TO_DO");
        when(taskService.saveTask(any(Task.class))).thenReturn(savedTask);

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());

        mockMvc.perform(post("/api/tasks/create-task")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(taskToCreate)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(savedTask.getId().intValue())));
    }


}
