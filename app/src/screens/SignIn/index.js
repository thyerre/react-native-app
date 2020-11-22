import React, { useState } from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import SignInput from '../../components/SignInput';

import BarbarLogo from '../../assets/barber.svg';

import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import { TextInput } from 'react-native';

export default () => {

  const [emailField, setEmailField] = useState('thyerrre');
  const [textField, asdsad] = useState('textField');
  const [passwordField, setPasswordField] = useState('');

  return (
    <Container>
      <BarbarLogo width="100%" height="160" />

      <InputArea>
        <TextInput value={textField} onFocus={() => this.onFocus()} />

        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChengeText={t => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChengeText={t => setEmailField(t)}
        />


        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
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
