import React from 'react';
import { Card, CardContent, Typography, IconButton, Chip, CardActions, Tooltip } from '@mui/material';
import ITask from '../../types'; 
import { blue, green,yellow,red } from '@mui/material/colors';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


// Type for the props of TaskCard
interface TaskCardProps {
  task: ITask;
  onUpdateTask: (updatedTask: ITask) => void;
  onDeleteTask: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onUpdateTask, onDeleteTask }) => {
  // Implement the edit function to call onUpdateTask
  const handleEdit = () => {
    onUpdateTask(task);
  };

  // Implement the delete function to call onDeleteTask
  const handleDelete = () => {
    onDeleteTask(task.id); // Calls the passed onDeleteTask function from props
  };


  const statusColor = {
    'To Do': yellow[700],
    'In Progress': blue[500], 
    'Done': green[500], 
  }[task.status];


  return (
    <Card elevation={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8%' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Chip label={task.status} size="small" style={{ backgroundColor: statusColor, color: 'white', marginRight: 'auto' }} />
      <Tooltip title="Edit">
        <IconButton onClick={handleEdit}>
          <EditOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={handleDelete} sx={{ color: red[600] }}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

    </CardActions>
    </Card>
  );
};

export default TaskCard;
