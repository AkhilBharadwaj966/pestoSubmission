import ITask from "../types/ITask";
import axios from "./axios";

const url = '/api/tasks'; 
// Fetch all tasks
export const getTasks = () => axios.get(url);

// Fetch a single task by ID
export const getTaskById = (id: number) => axios.get(`${url}/${id}`);

// Save a new task
export const saveTask = (task: ITask) => axios.post(`${url}/create-task`, task);

// Update an existing task
export const updateTask = (id:string,task:ITask) => axios.put(`${url}/${id}`, task);

// Delete a task
export const deleteTask = (id: string) => axios.delete(`${url}/${id}`);
