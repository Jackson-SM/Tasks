import React from 'react';

import avatarimg from '../../../assets/images/profile.jpg';
import { Text } from '../../Text';
import { AvatarContainer } from './styles';

export function Avatar() {
  return (
    <AvatarContainer>
      <div className="avatar">
        <img src={avatarimg} alt="" />
      </div>
      <Text css={{ fontSize: '15px' }}>Jackson S.</Text>
      <Text size="sm" as="span" colorOpacity>
        Programming
      </Text>
    </AvatarContainer>
  );
}
