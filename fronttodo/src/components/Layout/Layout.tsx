import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';


type LayoutProps = {
  children: React.ReactNode; 
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Task Manager</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
