import { Button, Container, Grid, Modal, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todoApi from '../../apis/todoApi';
import TodoCard from '../../components/card/TodoCard';
import TodoCardEdit from '../../components/card/TodoCardEdit';
// import { Link as MLink } from '@material-ui/core';
// import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import { authLogout } from '../../stores/actions/authAction';
import useStyles from './Home.styles';
// import todoList from './todoList';

function Home() {
  const classes = useStyles();

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', due_date: '' });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(
    () => {
      fetchTodos();
      return () => {};
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token, dispatch],
  );

  function fetchTodos() {
    todoApi({
      url: '/api/todos',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        setTodoList(result.data);
      })
      .catch((err) => {
        console.error(err);
        dispatch(authLogout());
      });
  }

  function clearNewTask() {
    setNewTask({ title: '', description: '', due_date: '' });
  }

  function handleTaskChange(name, value) {
    if (name === 'title') {
      setNewTask({ ...newTask, title: value });
    } else if (name === 'description') {
      setNewTask({ ...newTask, description: value });
    } else if (name === 'due_date') {
      setNewTask({ ...newTask, due_date: value });
    }
  }

  function handleAddTask(e) {
    e.preventDefault();
    setDisableSubmit(true);

    todoApi({
      url: '/api/todos',
      method: 'POST',
      headers: {
        Authorization: token,
      },
      data: newTask,
    })
      .then(() => {
        fetchTodos();
        setDisableSubmit(false);
        setOpenBackdrop(false);
        clearNewTask();
      })
      .catch((err) => {
        console.error(err);
        setDisableSubmit(false);
        setOpenBackdrop(false);
        clearNewTask();
      });
  }

  function handleDeleteTask(id) {
    todoApi({
      url: `/api/todos/${id}`,
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleOpenAddTask = () => {
    setOpenBackdrop(true);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <h1>Todo List</h1>
          </Grid>
          <Grid item style={{ marginLeft: 'auto' }}>
            <Button fullWidth variant="contained" color="secondary" onClick={handleOpenAddTask}>
              Add Task
            </Button>
          </Grid>
        </Grid>
        <Paper className={classes.paper} elevation={8}>
          <Grid container spacing={3}>
            {todoList.map((todo) => {
              return (
                <Grid item xs={12} sm={6} lg={3} key={todo._id}>
                  <TodoCard todo={todo} handleDeleteTask={handleDeleteTask} />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Container>

      {/* Add Task */}
      <Modal
        className={classes.backdrop}
        open={openBackdrop}
        onClose={() => {
          setOpenBackdrop(false);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TodoCardEdit
          newTask={newTask}
          handleTaskChange={handleTaskChange}
          handleAddTask={handleAddTask}
          disableSubmit={disableSubmit}
        />
      </Modal>
    </>
  );
}

export default Home;
