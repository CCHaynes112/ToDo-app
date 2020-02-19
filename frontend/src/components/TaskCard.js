import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 300
    },

    cardActions: {
        justifyContent: "space-between",
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0 auto',
        alignItems: 'flex-end',
    },

    content: {
        overflow: "auto",
        margin: "10px",
    }
});

function TaskCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader title={props.title} />
            <CardContent className={classes.content}>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color="primary" variant="contained">Complete</Button>
                <Button color="secondary" variant="contained">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default TaskCard;
