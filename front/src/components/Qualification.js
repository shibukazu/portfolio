import { Heading, Box } from "@primer/react"

const Qualification = () => {
    return (
        <Box m={4}>
            <Heading as={"h2"}>Qualification</Heading>
            <Box sx={{ml: 3}}>
                <ul>
                    <li>TOEIC L&R 945点</li>
                    <li>統計検定 データサイエンティスト発展</li>
                </ul>
            </Box>
        </Box>
    )

}

export default Qualification;