import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import {Button, Grid} from "@mui/material";
import {GitHub, Twitter} from "@mui/icons-material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" sx={{
            textAlign: "center"
        }}>
            {"Copyright © "}
            <Link color="inherit" href="https://pyrrha.dev/">
                Pyrrha van der Zwet
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: "auto",
                position: "relative",
                margin: "auto",
                bottom: "0%",
                width: "100%"
            }}
        >
            <Container maxWidth={"xs"}>
                <Grid container
                      direction={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                >
                    <Grid item>
                        <Button
                            startIcon={<GitHub/>}
                            onClick={() => {
                                global.window.location.href = "https://github.com/PyrrhaDevs"
                            }}>
                            GitHub
                        </Button>
                        <Button
                            startIcon={<Twitter/>}
                            onClick={() => {
                                global.window.location.href = "https://twitter.com/JustPyrrha"
                            }}>
                            Twitter
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Copyright/>
                </Grid>
            </Container>
        </Box>
    );
}
