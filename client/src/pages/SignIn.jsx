import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      console.log(res.data);
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post("/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            console.log(res)
            dispatch(loginSuccess(res.data));
            navigate("/")
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <Input placeholder="username"  onChange={(e) => setName(e.target.value)} />
        <Input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Signin with Google</Button>
        <Title>Sign up</Title>
        <Input placeholder="username"  onChange={(e) => setName(e.target.value)} />
        <Input placeholder="email"  onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)} />
        <Button >Sign up</Button>
      </Wrapper>
     
    </Container>
  );
};

export default SignIn;
