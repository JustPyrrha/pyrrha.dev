import {Card, CardContent, Typography} from "@mui/material";
import React from "react";

const Awards = () => {
    return (
        <>
            <Card
                elevation={8}
                sx={{
                    borderRadius: "8px",
                    maxWidth: "345px",
                    minHeight: "275px",
                }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Awards
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            <li><strong>Deans Special Award</strong><br/>Eastern Institute of Technology, 2019</li>
                            <li><strong>Innovate New Zealand</strong><br/>GovHack NZ Nationals, 2019</li>
                            <li><strong>Best use of data in a Civil Emergency</strong><br/>GovHack NZ Nationals, 2019</li>
                            <li><strong>Getting Around Challenge (runner up)</strong><br/>GovHack NZ Nationals, 2020</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default Awards