import {Card, CardContent, Chip, Grid, Tooltip, Typography} from "@mui/material";
import React, {useEffect} from "react";

const AboutExperience = () => {
    const [rank, setRank] = React.useState<number | null>(null);

    useEffect(() => {
        fetch("https://scoresaber.com/api/player/76561198205167308/basic", {
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => res.json())
            .then(json => {
                console.info(`[ScoreSaber] Pulled CountryRank for PyrrhaDev: #${json.countryRank}`)
                setRank(json.countryRank)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            <Card elevation={8}
                  sx={{
                      borderRadius: "8px",
                      maxWidth: "690px",
                      minWidth: "755px",
                      minHeight: "350px",
                  }}>
                <CardContent>
                    <Grid container direction={"row"}>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="h5" component="div">
                                About
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                padding: "8px"
                            }}>
                                Hi I'm <strong>Pyrrha</strong>, I'm a trans woman living in Hawkes Bay, New Zealand.
                                <br/>
                                I specialize in writing Java and Kotlin but I love learning new languages and working on
                                all kinds of new features.
                                <br/>
                                I have recently been learning about the exciting world of dev-ops which is something
                                that I quite enjoy. My frontend framework of choice is React and my mobile framework of
                                choice is Flutter.
                                <br/>
                                I also enjoy modding PC games, playing with virtual reality and I am ranked <Tooltip
                                title={"Pulled directly from the ScoreSaber API."}
                                arrow><strong>#{rank}</strong></Tooltip> in New Zealand for Beat Saber.
                                <br/>

                                <br/>
                                Please note that projects labeled with the "Deadname" badge I worked on under my
                                deadname.
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="h5" component="div">
                                Experience
                            </Typography>
                            <Chip label={"Deadname"} variant={"outlined"}/>
                            <Typography variant="body2" color="text.secondary" sx={{
                                padding: "8px"
                            }}>
                                Re-Leased
                                <ul>
                                    <li>Started November 2020 as intern.</li>
                                    <li>Hired full time from July 2021.</li>
                                    <li>Fullstack ASP.NET/C#/JS + Serverless Function App.</li>
                                    <li>Designed, developed, and tested an asynchronous microservice connecting external
                                        third-party APIs to in house software.
                                    </li>
                                </ul>
                                I have been working primarily as a Full Stack Developer. I have spent my time writing
                                tests and completing tickets by fixing bugs. Lately I have moved to a team that
                                specializes in working on experimental features.
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default AboutExperience