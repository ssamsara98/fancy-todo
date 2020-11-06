import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import moment from 'moment';
import React, { useState } from 'react';

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
  textGreen: {
    color: 'green',
    marginBottom: 12,
  },
  textOrange: {
    color: 'orangered',
    marginBottom: 12,
  },
  textBlack: {
    color: 'grey',
    marginBottom: 12,
  },
});

function TodoCard(props) {
  const { todo, handleDeleteTask, onEdit, handlePatchTask } = props;
  const classes = useStyles();

  const [isDisableButton, setIsDisableButton] = useState(false);

  const isOverdue = new Date(todo.due_date).getTime() < Date.now();

  moment.locale('en-gb');

  function handleToggleTask(e, todoId, status) {
    e.preventDefault();
    const mark = status === 0 ? 'done' : 'undone';
    setIsDisableButton(true);

    handlePatchTask(todoId, mark, () => {
      setIsDisableButton(false);
    });
  }

  return (
    <Card variant="elevation">
      <CardActionArea onClick={onEdit}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            {todo.title}
          </Typography>
          <Typography
            className={
              todo.status === 1
                ? classes.textGreen
                : isOverdue
                ? classes.textBlack
                : classes.textOrange
            }
            color="textSecondary"
          >
            {todo.status === 1 ? 'Done' : isOverdue ? 'Over Due' : 'Incomplete'}
          </Typography>
          <Typography variant="body2" component="p">
            {todo.description}
          </Typography>
          <Typography variant="caption" component="p" style={{ textAlign: 'end' }}>
            {moment(todo.due_date).format('LL')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-between">
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            style={{ color: 'royalblue' }}
            onClick={(e) => handleToggleTask(e, todo._id, todo.status)}
            disabled={isDisableButton}
          >
            {todo.status === 0 ? 'Mark as Done' : 'Mark as Undone'}
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              handleDeleteTask(todo._id);
            }}
          >
            <DeleteForever />
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default TodoCard;
