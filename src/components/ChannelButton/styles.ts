import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background: transparent;
  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, e.active {
    background: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;


export const HashtagIcon = styled.div`

`;

export const InviteIcon = styled.div`

`;

export const SettingsIcon = styled.div`

`;