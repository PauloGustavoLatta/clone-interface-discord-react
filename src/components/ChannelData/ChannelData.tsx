import ChannelMessage, { Mention } from '../ChannelMessage/ChannelMessage';
import { Container, Input, InputIcon, InputWrapper, Messages } from './styles';
import React, { useEffect, useRef } from 'react';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [])

  return (
    <Container>
      <Messages ref={messagesRef}>
      {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Gustavo Lata"
            date='05/06/2000'
            content='Hoje é o meu aniversário, estou de parabuens!'
          />
        ))}
        <ChannelMessage
          isBot
          hasMention
          author="Diego Fernandes"
          date='05/06/2000'
          content={
            <>
              <Mention>@Gustavo Lata</Mention>, me carrega no LoL e CS de novo por favor? 
            </>
          }
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder='Conversar em Chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
