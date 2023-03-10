import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
  color: white;
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {

 const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <BrowserRouter>
        {/* <Menu /> */}
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route
                    path="signin"
                    element={currentUser ? <Home /> : <SignIn />}
                  />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
