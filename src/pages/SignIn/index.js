import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { Container, FormContainer, LeftBox, RightBox } from './styles';
import logo from '../../assets/images/logo.png';

import * as authActions from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { email, password } = data;
    dispatch(authActions.signInRequest(email, password));
  }

  return (
    <Container>
      <LeftBox>
        <div>
          <h1>Worth Box</h1>
          <p>
            Seu problema é estoque? <br /> Worth Box é a sua escolha!
          </p>
        </div>
      </LeftBox>
      <RightBox>
        <FormContainer>
          <h1>Fazer Login</h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            <b>SEU E-MAIL</b> <br />
            <Input name="email" type="email" placeholder="exemplo@gmail.com" />
            <b>SUA SENHA</b> <br />
            <Input name="password" type="password" placeholder="*********" />
            <button type="submit">LOGIN</button>
          </Form>
        </FormContainer>
      </RightBox>
      <img src={logo} alt="Worth Box" />
    </Container>
  );
}

export default SignIn;
