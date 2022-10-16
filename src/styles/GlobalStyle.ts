import { globalCss } from '../config/stitches.config';

export const GlobalStyle = globalCss({
  '@import': [
    'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap',
  ],

  'html,body': {
    height: '100%',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto Mono, sans-serif',
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
  },
});
