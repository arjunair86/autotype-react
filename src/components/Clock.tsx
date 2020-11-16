import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Autotype from './Autotype'

const styles = makeStyles({
    root: {
        background: "#000000",
        color: "white"
    }
});

const Clock = () => {

    const classes = styles();
    const list = ["hello this is a test", "another string"];

    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justify="center" style={{ minHeight: "80vh" }}>
                <Grid item>
                    <Typography variant="h1" component="h1">
                        <Autotype list={list}/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Clock;