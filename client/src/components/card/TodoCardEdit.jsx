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
  const { newTask, handleTaskChange, handleAddTask, disableSubmit } = props;

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={8}>
        <Card>
          <CardHeader
            title={
              <Typography component="h1" variant="h5">
                New Task
              </Typography>
            }
          />
          <form onSubmit={handleAddTask}>
            <CardContent>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="new-task-title"
                label="Task Title"
                autoFocus
                value={newTask.title}
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
                value={newTask.description}
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
                value={newTask.due_date}
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
                Add Task
              </Button>
            </CardActions>
          </form>
        </Card>
      </Paper>
    </Container>
  );
}

export default TodoCardAddNew;
