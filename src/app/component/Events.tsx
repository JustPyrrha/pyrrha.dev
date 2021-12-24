import {Card, CardContent, Link, Typography} from "@mui/material";
import React from "react";

const Events = () => {
  return (
      <Card
          elevation={8}
          sx={{
              borderRadius: "8px",
              maxWidth: "345px",
              minHeight: "275px",
          }}>
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Events
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Hackathons
                  <ul>
                      <li><Link href={"https://govhack.org/2019-winners/"} rel={"noopener noreferrer"}>GovHack 2019</Link></li>
                      <li><Link href={"https://govhack.org/2020-winners/"} rel={"noopener noreferrer"}>GovHack 2020</Link></li>
                  </ul>
                  Mod Jams
                  <ul>
                      <li><Link href={"https://modfest.net/1.15"} rel={"noopener noreferrer"}>ModFest 1.15</Link></li>
                      <li><Link href={"https://modfest.net/1.16"} rel={"noopener noreferrer"}>ModFest 1.16</Link></li>
                      <li><Link href={"https://modfest.net/fallfest/1.16/"} rel={"noopener noreferrer"}>MiniFest: FallFest 1.16</Link></li>
                  </ul>
              </Typography>
          </CardContent>
      </Card>
  )
}

export default Events