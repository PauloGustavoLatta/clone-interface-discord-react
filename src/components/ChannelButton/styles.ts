import { Hashtag, PersonAdd, Settings } from '../../styles/Icons';
import styled, { css } from 'styled-components';

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


export const HashtagIcon = styled(Hashtag)`
  color: var(--symbol);
  height: 20px;
  width: 20px;
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

export const InviteIcon = styled(PersonAdd)`
  ${iconCSS}
`;

export const SettingsIcon = styled(Settings)`
  ${iconCSS}
  margin-left: 4px;
`;