import { Avatar, Container, Role, User } from './styles';

import React from 'react';

interface UserProps {
  nickname: string;
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({
  nickname, isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong> {nickname} </strong>

      {isBot && <span> Bot </span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname='Gustavo Lata'/>

      <Role>Offline - 18</Role>
      <UserRow nickname='Diego Fernandes' isBot/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
      <UserRow nickname='Fulano'/>
    </Container>
  );
}

export default UserList;