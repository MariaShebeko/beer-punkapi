import { IoMdArrowRoundBack } from 'react-icons/io';
import { btnCl, accentTextCl, accentBgCl, textCl } from 'styles/styleVars';
import styled from 'styled-components';

export default function ButtonBack({ onGoBack }) {
  return (
    <ButtonWrapper>
      <Button type="button" onClick={onGoBack}>
        <Icon />
        back
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  padding: 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 120px;
  background-color: ${btnCl};
  cursor: pointer;
  color: ${accentTextCl};
  text-transform: uppercase;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${textCl};
    color: ${accentBgCl};
  }
`;
const Icon = styled(IoMdArrowRoundBack)`
  margin-right: 10px;
`;
