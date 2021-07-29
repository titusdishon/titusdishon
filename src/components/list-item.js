import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import FolderIcon from "@material-ui/icons/Folder";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgressWithLabel from "./progress";

const useStyles = makeStyles((theme) => ({
  IconButton: {
    backgroundColor: theme.palette.primary.contrastText,
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

const CustomListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={props.alt} src={props.icon} />
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={<LinearProgressWithLabel value={props.value} />}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="view more"
          className={classes.IconButton}
        >
          <FolderIcon className={classes.icon} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CustomListItem;
