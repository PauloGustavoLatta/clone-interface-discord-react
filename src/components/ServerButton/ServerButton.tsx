import { Button, ReactIcon } from './styles';

import Logo from '../../assets/Logo.svg';
import React from 'react';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
            {isHome && <ReactIcon />}
    </Button>
  );
};

export default ServerButton;