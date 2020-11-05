import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function TodoCardAddNew(props) {
  const classes = useStyles();

  // const { isEdit } = props;
  const { isEdit, task, handleTaskChange, handleSumbitTask, disableSubmit } = props;

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={8}>
        <Card>
          <CardHeader
            title={
              <Typography component="h1" variant="h5">
                {isEdit ? 'Change Task' : 'Add Task'}
              </Typography>
            }
          />
          <form onSubmit={isEdit ? (e) => handleSumbitTask(e, task.id) : handleSumbitTask}>
            <CardContent>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="new-task-title"
                label="Task Title"
                autoFocus
                value={task.title}
                onChange={(e) => handleTaskChange('title', e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="new-task-description"
                label="Task Description"
                autoFocus
                value={task.description}
                onChange={(e) => handleTaskChange('description', e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="date"
                name="new-task-due_date"
                label="Task Duedate"
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
                value={task.due_date}
                onChange={(e) => handleTaskChange('due_date', e.target.value)}
              />
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={disableSubmit}
              >
                {isEdit ? 'Edit Task' : 'Add Task'}
              </Button>
            </CardActions>
          </form>
        </Card>
      </Paper>
    </Container>
  );
}

export default TodoCardAddNew;
