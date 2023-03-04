import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
  color:white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color:#1e1e1e;
  padding: 20px 100px;
  gap: 10px;
  border:1px solid #4C4C47;
`;

const Title = styled.h1`
  font-size: 24px;
`;


const Input = styled.input`
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 125%;
  color: white;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #181811;
  color:white;
`;


const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Button>Signin with Google</Button>
        <Title>Sign up</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
     
    </Container>
  );
};

export default SignIn;
