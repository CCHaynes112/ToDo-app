import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getThemeProps } from '@material-ui/styles';


const useStyles = makeStyles({
    card: {
        
    },
});

function TaskCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6">
                    {props.title}
                </Typography>
                <Typography variant="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained">Complete</Button>
                <Button color="secondary" variant="contained">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default TaskCard;
