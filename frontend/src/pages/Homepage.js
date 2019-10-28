import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
                <Query
                    query={gql`
                        {
                            allTodotasks {
                                id,
                                title,
                                description
                            }
                        }
                    `}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error loading tasks</p>;
                        return data.allTodotasks.map(({ id, title, description }) => (
                            <Grid item sm={3} key={id}>
                                <TaskCard title={title} description={description} />
                            </Grid>
                        ));
                    }}
                </Query>
            </Grid>
        </div>
    );
}

export default Homepage;
