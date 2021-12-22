import {Card, CardContent, Chip, Typography} from "@mui/material";
import React from "react";

const Skills = () => {
    const skills = [
        "JavaScript/TypeScript",
        "React",
        "NodeJS",
        "C#",
        "Java/Kotlin",
        "Golang",
        "PostgreSQL",
        "jQuery",
        "Express",
        "HTML",
        "CSS/SASS",
        "Git",
        "Unity",
        "Python 3",
        "Docker",
        "CD/CI",
        "DevOps",
        "Flutter",
        "AWS/Azure",
        "Jenkins",
        "Maven",
        "Gradle"
    ];

    return (
        <>
            <Card elevation={8}
                  sx={{
                      borderRadius: "8px",
                      maxWidth: "345px",
                      minHeight: "350px",
                  }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Skills
                    </Typography>
                    {
                        skills.map((s, i) => <Chip key={`skill-chip-${i}`} sx={{margin: "1px"}} label={s} variant="outlined"/>)
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default Skills