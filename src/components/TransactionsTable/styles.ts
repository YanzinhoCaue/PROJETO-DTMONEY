import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  overflow-x: auto;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;
    min-width: 640px;

    th{
      color: var(--text-body);
      font-size: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    td{
      padding: 1rem 2rem;
      border: none;
      background: linear-gradient(180deg, #121a34 0%, #0e152d 100%);
      color: var(--text-body);
      border-radius: 0.3rem;
      border-top: 1px solid rgba(19, 197, 255, 0.25);
      border-bottom: 1px solid rgba(19, 197, 255, 0.18);

      &:first-child{
        color: var(--text-title);
        font-weight: 600;
      }

      &.deposit{
        color: var(--green);
        text-shadow: 0 0 10px rgba(0, 231, 160, 0.25);
      }

      &.withdraw{
        color: var(--red);
        text-shadow: 0 0 10px rgba(255, 79, 135, 0.25);
      }

      .delete-button {
        width: 100%;
        border: 1px solid rgba(255, 79, 135, 0.35);
        border-radius: 0.35rem;
        background: rgba(255, 79, 135, 0.08);
        color: var(--red);
        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.55rem 0.9rem;
        transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;

        &:hover {
          transform: translateY(-1px);
          background: rgba(255, 79, 135, 0.14);
          box-shadow: 0 0 14px rgba(255, 79, 135, 0.25);
        }
      }

      .action-buttons {
        display: flex;
        gap: 0.5rem;
      }

      .edit-button {
        width: 100%;
        border: 1px solid rgba(19, 197, 255, 0.35);
        border-radius: 0.35rem;
        background: rgba(19, 197, 255, 0.08);
        color: var(--blue-light);
        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.55rem 0.9rem;
        transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;

        &:hover {
          transform: translateY(-1px);
          background: rgba(19, 197, 255, 0.14);
          box-shadow: 0 0 14px rgba(19, 197, 255, 0.25);
        }
      }
    }
  }
`;