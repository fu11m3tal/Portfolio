import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AvatarIcon from './AvatarIcon.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
  },
  shapeCircle: {
    borderRadius: '50%',
  },
}));

export default function BadgeNotification({friend}) {
  const classes = useStyles();

  const rectangle = <div className={classes.shape} />;
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  return (
    <div className={classes.root}>
      <Badge color="secondary" overlap="circle" badgeContent=" " badgeContent={friend.unread}>
        {<AvatarIcon friend={friend}/>}
      </Badge>
    </div>
  );
}
