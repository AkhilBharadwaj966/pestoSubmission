import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FilterSelectProps } from './FilterSelectPros'; 

const FilterSelect: React.FC<FilterSelectProps> = ({ currentFilter, setFilter }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select
        value={currentFilter}
        label="Status" 
        onChange={(e) => setFilter(e.target.value as string)} 
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="To Do">To Do</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
