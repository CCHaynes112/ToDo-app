import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    dialogBox: {
        width: 400
    },
    dialogTitle: {
        textAlign: "center",
    },
    textField: {
        width: "100%",
    },
});

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <div className={classes.dialogBox}>
                <DialogTitle className={classes.dialogTitle}>Create Task</DialogTitle>
                <form action="">
                    <List>
                        <ListItem>
                            <TextField
                                className={classes.textField}
                                required
                                label="Title"
                                onChange=""
                                margin="normal"
                            />
                        </ListItem>

                        <ListItem>
                            <TextField
                                className={classes.textField}
                                required
                                label="Description"
                                multiline
                                rows="4"
                                margin="normal"
                            />
                        </ListItem>
                        <ListItem>
                            <Grid item xs={12} align="center">
                                <Button type="submit" variant="contained" color="primary">Submit</Button>
                            </Grid>
                        </ListItem>
                    </List>
                </form>
            </div>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

/* Component for the button that creates the modal as well as handles opening and closing of the modal */
export default function CreateTaskDialog() {
    //const bool open;
    //setOpen sets state
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        //SimpleDialog I guess handles just the open and onClose events
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Create Task</Button>
            <SimpleDialog open={open} onClose={handleClose} />
        </div>
    );
}