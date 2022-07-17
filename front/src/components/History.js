import { Timeline, Box, StyledOcticon, Link, Text, Heading } from "@primer/react"
import { PencilIcon, OrganizationIcon } from "@primer/octicons-react"

const History = () => {
    return (
        <Box m={4}>
            <Heading as={"h2"}>History</Heading>
            <Timeline clipSidebar={true} sx={{mt: 2, ml: 4}}>
                <Timeline.Item>
                    <Timeline.Badge>
                        <StyledOcticon icon={PencilIcon}/>
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>Tohoku University, Bechelor of Engineering</Text>
                            <Text sx={{color: "fg.muted"}}>Apr 2018 - Mar 2022</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Badge>
                        <StyledOcticon icon={OrganizationIcon} />
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>Unicast Inc. Internship</Text>
                            <Text sx={{color: "fg.muted"}}>Aug 2020 - Dec 2020</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Badge>
                        <StyledOcticon icon={OrganizationIcon} />
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>MEDIA DO Co., Ltd. Summer Internship</Text>
                            <Text sx={{color: "fg.muted"}}>Aug 2020</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Badge>
                        <StyledOcticon icon={OrganizationIcon} />
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>Recruit Holdings Co., Ltd. Internship</Text>
                            <Text sx={{color: "fg.muted"}}>Feb 2021</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Badge>
                        <StyledOcticon icon={OrganizationIcon} />
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>Cybozu, Inc. Internship</Text>
                            <Text sx={{color: "fg.muted"}}>Sep 2021</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Badge>
                        <StyledOcticon icon={OrganizationIcon} />
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>Sony Interactive Entertainment Inc. Internship</Text>
                            <Text sx={{color: "fg.muted"}}>Feb 2022</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Badge>
                        <StyledOcticon icon={OrganizationIcon} />
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>CyberAgent, Inc. Internship</Text>
                            <Text sx={{color: "fg.muted"}}>Mar 2022</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Badge sx={{bg: 'success.emphasis'}}>
                        <StyledOcticon icon={PencilIcon} color="fg.onEmphasis"/>
                    </Timeline.Badge>
                    <Timeline.Body>
                        <Box sx={{mt: 1}}>
                            <Text sx={{fontWeight: 'bold', color: 'fg.default', mr: 1}}>Kyoto University, Master of Informatics</Text>
                            <Text sx={{color: "fg.muted"}}>Apr 2022 - current</Text>
                        </Box>
                    </Timeline.Body>
                </Timeline.Item>
            </Timeline>
        </Box>
    )
}
export default History;