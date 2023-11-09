import React from 'react';
import  ITask  from '../../types';
import TaskCard from '../TaskCard';
import { Box } from '@mui/material';

type TaskListProps = {
  tasks: ITask[]; // An array of task items to be displayed by the component.
  onUpdateTask: (updatedTask: ITask) => void; // A function to call when a task is updated.
  onDeleteTask: (id: string) => void; // A function to call when a task is deleted, identified by its id.
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <Box pt={2} key={task.id}>
              <TaskCard
                task={task}
                onUpdateTask={onUpdateTask}
                onDeleteTask={onDeleteTask}
              />
            </Box>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
