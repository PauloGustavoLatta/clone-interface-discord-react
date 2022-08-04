import { Container, Separator } from './styles';

import React from 'react';
import ServerButton from '../ServerButton/ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={72} />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;