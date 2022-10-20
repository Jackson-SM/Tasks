import { styled } from '../../../config/stitches.config';

export const AvatarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  gap: '$sm',

  '& .avatar': {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',

    '& img': {
      width: '100px',
      borderRadius: '50%',
    },
  },
});
