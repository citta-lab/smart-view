import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ScheduleManager from '../calendar/ScheduleManager'
import TimeSelection from '../calendar/TimeSelection';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Layout(props) {
  console.log(" 2. in layout props here : "+JSON.stringify(props.onClick));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <ScheduleManager value={props.value}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <TimeSelection value={props.value} onClick={props.onClick}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}