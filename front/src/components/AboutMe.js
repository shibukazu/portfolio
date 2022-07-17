import {Box, Heading} from "@primer/react"

const AboutMe = () => {
    return (
        <Box m={4}>
            <Heading as={"h2"}>About me</Heading>
            <Box sx={{ml: 3}}>
                <ul>
                    <li>Kyoto University Student</li>
                    <li>Software Engineer</li>
                </ul>
            </Box>
        </Box>
    )
}

export default AboutMe;