import EducationalBackground from "./EducationalBackground"
import Internship from "./Internship"
import Qualification from "./Qualification"
import History from "./History"
import AboutMe from "./AboutMe"
import { Box, Heading } from "@primer/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Contents = () => {
    return (
        <Box m={0}>
            <Box m={2}>
                <AboutMe />
                <History id="history"/>
                <Qualification id="qualification"/>
            </Box>
        </Box>
    )
}

export default Contents