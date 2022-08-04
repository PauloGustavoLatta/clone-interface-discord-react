import ChannelInfo from '../ChannelInfo/ChannelInfo';
import ChannelList from '../ChannelList/ChannelList';
import { Container } from './styles';
import React from 'react';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Container>
  );
}

export default Layout;