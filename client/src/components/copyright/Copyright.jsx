import { Link, Typography } from '@material-ui/core';
import { CopyrightOutlined } from '@material-ui/icons';
import React from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright
      <CopyrightOutlined fontSize="small" />{' '}
      <Link color="inherit" href="https://material-ui.com/">
        Fancy Todo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
