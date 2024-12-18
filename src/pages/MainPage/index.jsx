import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

import {Container, Logo, Title, Form, Input, Button} from "./styles";

import githubLogo from '../../assets/images/github-logo.svg';

function MainPage() {
  const [login, setLogin] = useState('');
  
  return (
    <Container>
      <Logo src={githubLogo}  alt="API Github" />
      <Title>API GitHub</Title>
      <Form>
        <Input 
        placeholder="Usuário" 
        value={login} 
        onChange={(event) => setLogin(event.target.value)}
        />
        <Button to = {`/${login}/repositories`}>
          <IoMdSearch size={42} color="white"/>
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage
