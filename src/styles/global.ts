import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --primary: #5860d4;
  --secondary: #1fc8d4;
  --text-primary: #7a6eaa;
  --text-secondary: #280d5f;
  --text-tertiary: #7746d9;
  --neon-green: #39ff14;
  --primary-font-family: 'Kanit', sans-serif;
  --secondary-font-family: 'Carter One', sans-serif;

  --background: #f5f7fa;
  --background-secondary: #eff1f9;

  --box-shadow: 0 10px 10px 0 rgba(60, 66, 87, 0.02), 0 5px 10px 0 rgba(0,0,0,0.03);

  --menu-height: 75px;
  --footer-height: 50px;
}

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--background);

  color: var(--text-primary);
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 5px;
  border-radius: 2px;
}

body::-webkit-scrollbar-thumb {
  background: var(--primary);
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body,
input,
textarea,
select,
button {
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--primary-font-family);
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(10px, 10px);
  }
  50% {
    transform: translate(0px, 0px);
  }
  75% {
    transform: translate(-10px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes moveupdown {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes blink {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes color {
  0% {
    background-color: var(--neon-green);
  }
  50% {
    background-color: green;
  }
  100% {
    background-color: var(--neon-green);
  }
}

@keyframes faq {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75%{
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes faqHover {
  0% {
    transform: scale(0.9);
  }
  25% {
    transform: scale(1.2);
  }
  75%{
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
`;
