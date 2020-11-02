import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

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
});

function TodoCard(props) {
  const { title, description, status, 'due-date': dueDate } = props;
  const classes = useStyles();
  console.log(props)

  return (
    <Card variant="elevation">
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography
          className={status === 1 ? classes.textGreen : classes.textOrange}
          color="textSecondary"
        >
          {status === 1 ? 'Done' : 'Incomplete'}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          {dueDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="inherit" style={{color: 'skyblue'}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default TodoCard;
