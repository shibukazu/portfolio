import { Text } from "@primer/react"

const Footer = () => {
    return (
        <Text sx={{fontWeight: 'bold', color: 'fg.muted', position: 'absolute', right: 2, bottom: 4, fontSize: 2}}>This portfolio is running on Raspberry Pi.</Text>
    )
}

export default Footer;