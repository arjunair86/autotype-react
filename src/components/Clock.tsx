import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Clock = () => {
    return (
        <div>
            <Grid container direction="column" alignItems="flex-end">
                <Grid item>
                    <Button variant="contained" color="primary">Click</Button>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="center" style={{ minHeight: "80vh" }}>
                <Grid item>
                    <Typography variant="h1" component="h1">
                        Hello&nbsp;
                    </Typography>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Clock;