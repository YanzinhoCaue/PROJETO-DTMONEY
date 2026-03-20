import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(110deg, #0a1430 8%, #121f45 58%, #0e1834 100%);
  border-bottom: 1px solid var(--border-neon);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    filter: drop-shadow(0 0 8px rgba(19, 197, 255, 0.45));
  }

  button{
    font-size: 1rem;
    color: var(--shape);
    background: linear-gradient(90deg, #13c5ff 0%, #00e7a0 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 0 2rem;
    border-radius: 0.4rem;
    height: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: transform 0.2s, filter 0.2s, box-shadow 0.2s;

    &:hover{
      transform: translateY(-2px);
      filter: brightness(1.05);
      box-shadow: 0 0 18px rgba(19, 197, 255, 0.45);
    }
  }
`;
