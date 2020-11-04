import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#000',
    background: '#fff',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top',
  },
  header2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0,
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header1}>404</h1>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'left',
            lineHeight: '49px',
            height: '49px',
            verticalAlign: 'middle',
          }}
        >
          <h2 className={classes.header2}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
