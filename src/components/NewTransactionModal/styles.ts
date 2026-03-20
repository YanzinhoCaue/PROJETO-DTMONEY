import styled from "styled-components";
import { darken, transparentize  } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.4rem;
    border: 1px solid rgba(19, 197, 255, 0.25);
    background: var(--input-background);
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-title);
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      outline: none;
      border-color: var(--blue-light);
      box-shadow: 0 0 0 3px rgba(19, 197, 255, 0.15);
    }

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: linear-gradient(90deg, #13c5ff 0%, #00e7a0 100%);
    color: #ffffff;
    border-radius: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    transition: filter 0.2s, transform 0.2s, box-shadow 0.2s;

    &:hover {
      filter: brightness(1.05);
      transform: translateY(-1px);
      box-shadow: 0 0 20px rgba(19, 197, 255, 0.4);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid rgba(19, 197, 255, 0.2);
  border-radius: 0.4rem;
  background: ${(props) => props.isActive 
    ?  transparentize(0.85, colors[props.activeColor])
    : 'rgba(255, 255, 255, 0.01)'};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${darken(0.02, "#13c5ff")};
    box-shadow: 0 0 14px rgba(19, 197, 255, 0.2);
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-body);
    font-weight: 600;
    letter-spacing: 0.02em;
  }
`;
