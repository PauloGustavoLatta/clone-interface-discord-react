import { AddCategoryIcon, Category, Container } from './styles';

import ChannelButton from '../ChannelButton/ChannelButton';
import React from 'react';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='Chat-livre' />
      <ChannelButton channelName='Trabalho' />
      <ChannelButton channelName='lolzinho' />
      <ChannelButton channelName='csgo' />
      <ChannelButton channelName='valorant' />
    </Container>
  );
}

export default ChannelList;