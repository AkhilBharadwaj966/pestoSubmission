import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ITask from '../../types/ITask';

// TaskFormProps defines the shape of the props that the TaskForm component expects.
interface TaskFormProps {
  onAddTask?: (task: ITask) => void; //optional function that will be called when a new task needs to be added.
  onUpdateTask?: (task: ITask) => void; //optional function that will be called when an existing task needs to be updated.
  existingTask?: ITask; //indicates that the form is being used to edit this existing task,
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask, onUpdateTask, existingTask }) => {
  const { register, handleSubmit, reset, setValue, formState: { isSubmitting } } = useFormContext<ITask>();

  // Effect to initialize form with existing task data for editing
  useEffect(() => {
    if (existingTask) {
      Object.keys(existingTask).forEach(key => {
        setValue(key as keyof ITask, existingTask[key as keyof ITask]);
      });
    }
  }, [existingTask, setValue]);

  const onSubmit = (data: ITask) => {
    if (existingTask) {
      // If existingTask is provided, we're editing
      onUpdateTask && onUpdateTask({ ...existingTask, ...data });
    } else {
      // If existingTask is not provided, we're adding a new task
      onAddTask && onAddTask({
        ...data,
        id: Date.now().toString() // Temporary unique ID
      });
    }
    reset(); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            {...register("title", { required: "Title is required" })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            {...register("description")}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              label="Status"
              {...register("status", { required: "Status is required" })}
            >
              {['To Do', 'In Progress', 'Done'].map((statusOption) => (
                <MenuItem key={statusOption} value={statusOption}>
                  {statusOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {existingTask ? 'Update' : 'Save'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
