import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import FilterSelect from '../FilterSelect';
import ITask from '../../types/ITask';
import ModalComponent from '../Modal';
import { Button, Grid } from '@mui/material';
import { getTasks, saveTask, updateTask, deleteTask } from '../../api-service/TaskService';
import { FormProvider, useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add'; 

const TaskListing: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState('All');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<ITask | undefined>(undefined);
  
  const methods = useForm<ITask>({
    defaultValues: selectedTask || { title: '', description: '', status: 'To Do' }
  });

  useEffect(() => {
    const fetchAllTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    }
    fetchAllTasks();
  }, [filter]);

  const handleAddTask = async (task: ITask) => {
    const newTask = await saveTask(task);
    setTasks([...tasks, newTask.data]);
    setOpenModal(false);
  };

  const handleUpdateTask = async (task: ITask) => {
    const updatedTask = await updateTask(task.id,task);
    setTasks(tasks.map(t => t.id === updatedTask.data.id ? updatedTask.data : t));
    setOpenModal(false);
    setSelectedTask(undefined);
  };

  const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId);
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleOpenForEdit = (task: ITask) => {
    setSelectedTask(task);
    methods.reset(task); // Reset form values with the task to be edited
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setSelectedTask(undefined);
    methods.reset(); // Reset form to default values
    setOpenModal(false);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  return (
    <>
      {openModal && (
        <ModalComponent open={openModal} onClose={handleModalClose}>
          <FormProvider {...methods}>
            <TaskForm
              existingTask={selectedTask}
              onAddTask={handleAddTask}
              onUpdateTask={handleUpdateTask}
            />
          </FormProvider>
        </ModalComponent>
      )}

<Grid container spacing={2} paddingTop={2} justifyContent="space-between" alignItems="center">
  

  <Grid item>
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />} 
      onClick={() => {
        setSelectedTask(undefined);
        methods.reset();
        setOpenModal(true);
      }}
    >
      Add Task
    </Button>
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <FilterSelect currentFilter={filter} setFilter={setFilter} />
  </Grid>


  <Grid item xs={12}>
    <TaskList
      tasks={filteredTasks}
      onUpdateTask={handleOpenForEdit}
      onDeleteTask={handleDeleteTask}
    />
  </Grid>
</Grid>
    </>
  );
};

export default TaskListing;
