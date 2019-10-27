import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TaskCard from '../components/TaskCard';

function Homepage() {
    return (
        <div>
            <Box my={4}>
                <Typography variant="h1" component="h1" gutterBottom style={{ textAlign: "center" }}>
                    HomePage!
                </Typography>

                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained">Add a Task</Button>
                </Grid>
            </Box>
            <Grid container spacing={2}>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
                <Grid item sm={3}>
                    <TaskCard title="Item 1" description="Words and stuff will go here. Here's a description of the to do item." />
                </Grid>
            </Grid>
        </div>
    );
}

export default Homepage;
