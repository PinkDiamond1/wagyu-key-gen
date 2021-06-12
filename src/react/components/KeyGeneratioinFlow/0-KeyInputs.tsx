import { TextField } from '@material-ui/core';
import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-notchedOutline .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;

type GenerateKeysProps = {
  step: number,
  setNumberOfKeys: Dispatch<SetStateAction<number>>,
  index: number | null,
  setIndex: Dispatch<SetStateAction<number | null>>,
  setPassword: Dispatch<SetStateAction<string>>,
  error: string,
}

const KeyInputs = (props: GenerateKeysProps) => {
  const [indexPassedIn, setIndexPassedIn] = useState(props.index != null);

  const updateNumberOfKeys = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    props.setNumberOfKeys(num);
  }

  const updateIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    props.setIndex(num);
  }

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setPassword(e.target.value);
  }

  if (props.step == 0) {
    return (
      <Container>
        Nice!  Your mnemonic is verified.  Now lets collect some info about the keys to generate:
        <StyledTextField id="number-of-keys" label="Number of Keys" variant="outlined" type="number" onChange={updateNumberOfKeys} />
        { !indexPassedIn && <StyledTextField id="index" label="Index" variant="outlined" type="number" onChange={updateIndex} /> }
        <StyledTextField id="password" label="Password" type="password" variant="outlined" onChange={updatePassword} />
        { props.error ? props.error : null }
      </Container>
    );
  }

  return (null);
}

export default KeyInputs;