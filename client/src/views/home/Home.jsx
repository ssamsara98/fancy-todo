import { Button, Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import TodoCard from '../../components/card/TodoCard';
// import { Link as MLink } from '@material-ui/core';
// import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import useStyles from './Home.styles';
import todoList from './todoList';

function Home() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <h1>Todo List</h1>
          </Grid>
          <Grid item style={{ marginLeft: 'auto' }}>
            <Button fullWidth variant="contained" color="secondary">
              Add Task
            </Button>
          </Grid>
        </Grid>
        <Paper className={classes.paper} elevation={8}>
          <Grid container spacing={3}>
            {todoList.map((todo) => {
              return (
                <Grid item xs={12} sm={6} lg={3} key={todo._id}>
                  <TodoCard
                    title={todo.title}
                    description={todo.description}
                    status={todo.status}
                    due-date={todo.due_date}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Home;
