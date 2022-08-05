import ChannelData from '../ChannelData/ChannelData';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import ChannelList from '../ChannelList/ChannelList';
import { Container } from './styles';
import React from 'react';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';
import UserInfo from '../UserInfo/UserInfo';
import UserList from '../UserList/UserList';

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Container>
  );
}

export default Layout;