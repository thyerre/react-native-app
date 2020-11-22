import React from 'react';
import {
  Container,
  InputArea,
  SignInput,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';
import BarbarLogo from '../../assets/barber.svg';

export default () => {
  return (
    <Container>
      <BarbarLogo width="100%" height="160" />

      <InputArea>
        {/* <SignInput />
        <SignInput /> */}

        <CustomButton>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
