import React from 'react';
import Layout from './components/Layout';

import TaskListing from './components/TaskListing';

const HomePage: React.FC = () => (
    <Layout>
      <TaskListing/>
    </Layout>
);


export default HomePage;
