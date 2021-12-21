import React from "react";
import {Avatar, Grid, Paper, Typography} from "@mui/material";
import TransFlagIcon from "../icons/TransFlagIcon";

const Hero = () => {
    return (
        <>
            <Paper elevation={0} sx={{
                width: '100%',
                paddingTop: '10px',
                paddingBottom: '10px'
            }}>
                <Grid container
                      spacing={5}
                      direction="row"
                      alignItems="center"
                      justifyContent="center">
                    <Grid item>
                        <Avatar
                            alt={"Pyrrha"}
                            src={"/assets/avatar.png"}
                            sx={{width: 128, height: 128}}
                        />
                    </Grid>
                    <Grid item>
                        <Grid direction={"column"} container>
                            <Grid item>
                                <Typography variant={"h3"}>
                                    Pyrrha van der Zwet
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"h5"}>
                                    <TransFlagIcon sx={{
                                        verticalAlign: "middle"
                                    }}/> She/Her &bull; Fullstack Software Engineer
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Hero;