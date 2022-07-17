import React from 'react';
import {Header, Avatar, Text} from '@primer/react'

const MyHeader = () => {
    return (
        <Header>
            <Header.Item full>
                <Text sx={{fontWeight: 'bold', color: 'white', fontSize: 4, ml: 2}}>Portfolio</Text>
            </Header.Item>
            <Header.Item mr={0}>
                <Avatar src={`${process.env.PUBLIC_URL}/avatar.jpeg`} size={40} square alt="@octocat" />
            </Header.Item>
        </Header>
    )
}

export default MyHeader;


