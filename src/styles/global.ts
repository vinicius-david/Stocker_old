import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  --color-background: #edf8ff;
  --color-primary-light: #B4F0B3;
  --color-primary: #77BC76;
  --color-primary-dark: #459443;
  --color-text-title: #E0E0E0;
  --color-text-complement: #E3D9D9;
  --color-text-base: #151718;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;

  font-size: 60%;
}

  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-text-base);
  }

  body, input, button, select {
    font-family: 'Ubuntu', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
