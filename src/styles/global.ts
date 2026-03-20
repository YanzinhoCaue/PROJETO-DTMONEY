import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #070814;
    --input-background: #0f1328;
    --green: #00e7a0;
    --red: #ff4f87;
    --blue: #0f1f46;
    --blue-light: #13c5ff;
    --text-title: #f3f7ff;
    --text-body: #9aa8c7;
    --shape: #11162b;
    --shape-soft: #151d37;
    --border-neon: rgba(19, 197, 255, 0.35);
  }

  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Rajdhani:wght@400;500;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialised;
    color: var(--text-body);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  body::before,
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
  }

  body::before {
    background:
      radial-gradient(circle at 15% 15%, rgba(19, 197, 255, 0.25), transparent 35%),
      radial-gradient(circle at 82% 12%, rgba(255, 79, 135, 0.2), transparent 28%),
      radial-gradient(circle at 75% 75%, rgba(0, 231, 160, 0.15), transparent 34%),
      linear-gradient(130deg, #060712 5%, #0a1124 48%, #070814 100%);
    animation: pulseGlow 9s ease-in-out infinite alternate;
  }

  body::after {
    background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 44px 44px;
    opacity: 0.45;
  }

  @keyframes pulseGlow {
    from {
      filter: saturate(1);
      transform: scale(1);
    }

    to {
      filter: saturate(1.2);
      transform: scale(1.03);
    }
  }

  body, input, textarea, button {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(5, 8, 18, 0.72);
    backdrop-filter: blur(3px);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: linear-gradient(180deg, #101832 0%, #0c1225 100%);
    border: 1px solid var(--border-neon);
    box-shadow: 0 0 28px rgba(19, 197, 255, 0.2);
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: none;
    background: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`