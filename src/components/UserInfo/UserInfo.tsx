import { Avatar, Container, HeadPhoneIcon, Icons, MicIcon, Profile, SettingsIcon, UserData } from './styles';

import React from 'react';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Gustavo Lata</strong>
          <span>#3494</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;