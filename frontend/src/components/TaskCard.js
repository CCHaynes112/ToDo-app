import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 300
    },
    cardActionArea: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto',
        alignItems: 'normal',
        justifyContent: 'flex-end',
    },
    cardActions: {
        justifyContent: "space-between",

    }
});

function TaskCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader title={props.title} />
            <CardContent>
                <Typography variant="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActionArea className={classes.cardActionArea}>
                <CardActions className={classes.cardActions}>
                    <Button color="primary" variant="contained">Complete</Button>
                    <Button color="secondary" variant="contained">Delete</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default TaskCard;
