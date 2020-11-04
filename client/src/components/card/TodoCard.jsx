import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import moment from 'moment';
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
  textBlack: {
    color: 'grey',
    marginBottom: 12,
  },
});

function TodoCard(props) {
  const { title, description, status, 'due-date': dueDate } = props;
  const classes = useStyles();

  const isOverdue = new Date(dueDate).getTime() < Date.now();

  moment.locale('en-gb');

  return (
    <Card variant="elevation">
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography
          className={
            status === 1 ? classes.textGreen : isOverdue ? classes.textBlack : classes.textOrange
          }
          color="textSecondary"
        >
          {status === 1 ? 'Done' : isOverdue ? 'Over Due' : 'Incomplete'}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography variant="caption" component="p" style={{ textAlign: 'end' }}>
          {moment(dueDate).format('LL')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="inherit" style={{ color: 'skyblue' }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoCard;
