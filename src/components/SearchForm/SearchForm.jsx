import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { accentBgCl, textCl } from '../../styles/styleVars';
import { warning } from '../../services/notification';
import styled from 'styled-components';

export default function SearchForm({ onSubmit }) {
  const [beerName, setBeerName] = useState('');

  const handleNameChange = event => {
    setBeerName(event.target.value.toLowerCase());
  };

  const handleNameSubmit = event => {
    event.preventDefault();

    if (beerName.trim() === '') {
      warning('Press the name of the beer');
      return;
    }
    onSubmit(beerName);
    setBeerName('');
  };

  return (
    <>
      <Form onSubmit={handleNameSubmit}>
        <Input
          onChange={handleNameChange}
          value={beerName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search beer"
        />
        <Button type="submit">
          <Icon />
        </Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  position: relative;

  width: 400px;
  margin: 0 auto 40px;
`;
const Button = styled.button`
  position: absolute;
  height: 50px;
  font-size: 18px;
  top: 0;
  right: 0;

  display: none;

  min-width: 80px;

  cursor: pointer;
  transition: filter 0.3s cubic-bezier(0.3, 0.5, 0.4, 0.9);

  border-radius: 0 10px 10px 0;
  background: ${textCl};

  font-weight: bold;
  &:hover {
    filter: brightness(0.8);
  }
`;
const Input = styled.input`
  position: relative;
  height: 50px;
  color: #2f2f2f;
  font-size: 18px;

  width: 100%;
  padding: 0 15px;

  transition: all 0.3s cubic-bezier(0.3, 0.5, 0.4, 0.9);
  transition-property: width, border-radius;

  border-radius: 10px;
  outline: 0;

  font-weight: 700;
  appearance: none;
  &:focus::placeholder {
    color: ${accentBgCl};
  }
  &:not(:placeholder-shown) + button {
    display: block;
  }
`;
const Icon = styled(BiSearchAlt)`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 30px;
  height: 30px;
  padding: 0;

  transform: translate(-50%, -50%);

  fill: ${accentBgCl};
`;
