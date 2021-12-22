import React from "react";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import {Grid} from "@mui/material";
import Skills from "./component/Skills";
import ProjectCard from "./component/ProjectCard";
import Projects from "./component/Projects";
import AboutExperience from "./component/AboutExperience";

const App = () => {
    return (
        <>
            <Hero/>
            <div style={{
                marginTop: "20px"
            }}>
                <Grid container
                      direction={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      spacing={8}
                >
                    <Grid item container xs={12}
                          spacing={8}
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"center"}>
                        <Grid item>
                            <AboutExperience />
                        </Grid>
                        <Grid item>
                            <Skills/>
                        </Grid>
                    </Grid>

                    <Grid item container
                          spacing={8}
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"center"}>
                        {
                            Projects.map(
                                (p, i) => (
                                    <Grid item>
                                        <ProjectCard key={`project-card-${i}`} {...p}/>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    )
}

export default App;
