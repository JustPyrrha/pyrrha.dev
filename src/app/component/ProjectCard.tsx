import {Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography} from "@mui/material";
import React from "react";

export interface ProjectCardProps {
    title: string,
    description: string,
    thumbnail?: string,
    links?: {
        icon: React.ReactNode,
        title: string,
        url: string
    }[],
    tags?: string[]
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <>
            <Card
                elevation={8}
                sx={{
                    borderRadius: "8px",
                    maxWidth: "345px",
                    minWidth: "345px",
                    minHeight: "350px",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                {props.thumbnail && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.thumbnail}
                        alt={props.title}
                    />
                )}
                {
                    !props.thumbnail && (
                        <div style={{
                            height: "140px"
                        }}/>
                    )
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    {
                        props.tags?.map((s, i) => <Chip key={`tag-${props.title}-chip-${i}`} sx={{margin: "1px"}}
                                                        label={s} variant="outlined"/>)
                    }
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <Box sx={{
                    flex: "1 0 auto"
                }}/>
                <CardActions>
                    {
                        props.links?.map(
                            link => <Button size={"small"} startIcon={link.icon}
                                            onClick={() => {
                                                if (global.window) {
                                                    global.window.location.href = link.url
                                                }
                                            }}
                            >{link.title}</Button>
                        )
                    }
                </CardActions>
            </Card>
        </>
    )
}

export default ProjectCard