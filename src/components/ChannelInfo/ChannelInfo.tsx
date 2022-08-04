import { Container, Description, HashtagIcon, Separator, Title } from './styles';

import React from 'react';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title> Chat-Livre </Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
    </Container>
  );
}

export default ChannelInfo;