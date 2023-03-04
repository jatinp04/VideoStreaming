import React from 'react'
import styled from 'styled-components';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comment from '../components/Comment';
import Comments from '../components/Comments';


const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.1 px solid white;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  color:white ;
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="100%" height="613" src="https://www.youtube.com/embed/I9H8GdXoCn0" title="My Shocking Experience with ₹2,199 AirPods Pro!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test Video </Title>
        <Details>
          <Info>
            9248984 views • 7 Days Ago
          </Info>
          <Buttons>
            <Button>
                <ThumbUpIcon/>
            123 Like
            </Button>
            <Button >
                <ThumbDownIcon/>
              321 Disklike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image  src='data:image/jpeg;base64,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1Dsr3NaS0h4DS4XPZuQPFHVOyRF1GAwVJmJp1euY5rSCblrrX91wG8bq79nafq6WnZxbFHfxyi/xupNcALlSLBcZzi5xcd7oiIihERERERERERERERERFxZcoiIiIiLAxXDY6iJ0UzczXeoPAg8COaobbzYp9O7JJqw36qUAnyPfzHDeF6IWFiWHxzxuilaHMdvB+YPAjmFUtm41XQwOP9nmnUGam73m/cd/rWCPHdVTuidlfoRuI+YKkY61k4EdQbOHuzb/AOIDh/Wisfb3YN0FzYyQOOj7XcwngQNx+B+Cq3EcPdEddW8HD8RwKsHB9jYrbq4d+Eaa+GPWUHag38HjiNnC4+vzXUMkJs8aHc4bj4LFWfQ4mYx1bh1kf1D+C7zQwP7UcwjZ9Jr948OavmI95aXsdPEdrCu5scQHDkTAc0cbEDUKKawuIABJO4BSzKVlOM0wzScIt38R/rzXBxFkQLaZuvGR3vHwHD+tFGNa57tLucfMlLu7gpb1OFPYipU23Y093xu8MoPGF2VtY6V2Z7vAcG+HcpzZ/AXPc27C55IDIwLm53FwHHuWfsxss+SRrGMMkrt1tzPtA7rjmVfOx2x8dG3M+z5iNX7wO5l/8W8925Yi/N2WaLoCg3B/5ON7VU3aw3v8T+Ww22uLdGxGx7aRollAdUOG/f1YPBvfzPkO/c0RSAAIC42IxFTEVDUqGSfXkiIilYURERERERERERERERERERERERERERERERERERF1SxBwLXAEEWIIuCDwIKrHbPo5vmlpBcHtOgPE7zl5j7J8uAVpooc0FbeDxtXCPzUzrqNjzC8i4ps+WE9WDcEgsdoQRvDc2/wKgnAjQixHA8F6z2k2Qp6ztPbkktpIzQ/eG5w+PIhVbjHRpUtlY3qmzgnsyNF/4r7vPTvQVHNsbroHDYHG9qk4Unbtd7vNpm3rRVXh+GPl13N+sfwHFWPsTsJJOew0siv2pXAjNbgBx8BoOK3/AGZ6NY47SVThI4fQbfKPEnU+AsPFb/FCGgNaAABYACwA5ADcqnM/WwUjFYbAiMJ26n/oRp/EevEKMwDAIaOPJE3U+886uceZP4bgphEV9FxXvc9xe8yTqURERVRERERERERERERERERERERERERERERERERERERERERERERfJREUHRfSIiKURERERERERERERERERERERERERERF/9k='/>
            <ChannelDetail>
              <ChannelName>Abc Hello</ChannelName>
              <ChannelCounter>67k Subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tenetur?</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>
           Subscribe
          </Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
    </Container>
  )
}

export default Video