import styled from 'styled-components';
import { btnCl, accentTextCl, accentBgCl, textCl } from 'styles/styleVars';

export default function Pagination({ prev, next, page, totalPages }) {
  return (
    <ButtonsWrapper>
      <Button type="button" onClick={prev} disabled={page <= 1}>
        prev
      </Button>
      <Button type="button" onClick={next} disabled={page >= totalPages}>
        next
      </Button>
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-size: 25px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${btnCl};
  cursor: pointer;
  color: ${accentTextCl};
  text-transform: uppercase;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${textCl};
    color: ${accentBgCl};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.4;
  }
`;
