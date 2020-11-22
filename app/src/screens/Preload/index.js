import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
//Component para redirecionamento de tela
import {useNavigation} from '@react-navigation/native';

// Image são transformadas em componentes
import BarberLogo from '../../assets/barber.svg';

export default () => {
  const navigate = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        //validar
      } else {
        // mandar para o login
        navigate.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon sixe="large" color="#fff" />
    </Container>
  );
};
