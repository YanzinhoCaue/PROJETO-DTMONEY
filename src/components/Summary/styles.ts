import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  @media(max-width: 920px) {
    grid-template-columns: 1fr;
  }

  div{
    background: linear-gradient(180deg, var(--shape-soft) 0%, var(--shape) 100%);
    padding: 1.5rem 2rem;
    border-radius: 0.45rem;
    color: var(--text-title);
    border: 1px solid var(--border-neon);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);

    p {
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 700;
    }

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        filter: drop-shadow(0 0 8px rgba(19, 197, 255, 0.35));
      }
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.hightlight-background{
      background: linear-gradient(120deg, #0ed1c2 0%, #13c5ff 55%, #8d4fff 100%);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.32);
      box-shadow: 0 0 24px rgba(19, 197, 255, 0.45);

      img {
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
      }
    }
  }
`;