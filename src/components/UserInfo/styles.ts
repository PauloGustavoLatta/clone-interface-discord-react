import { Headset, Mic, Settings } from '../../styles/Icons';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;
  
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
  // justify-content: space-between;
`;

const iconCSS = css`
  height: 20px;
  width: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;

export const MicIcon = styled(Mic)`
  ${iconCSS}
`;
 
export const HeadPhoneIcon = styled(Headset)`
  ${iconCSS}
`;
  
export const SettingsIcon = styled(Settings)`
  ${iconCSS}
`;
