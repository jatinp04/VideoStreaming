import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format} from "timeago.js"
import axios from "axios"

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: White;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: white;
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: white;
`;

const Cards = ({type,video}) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl}></Image>
        <Details type={type}>
          <ChannelImage type={type} src={channel.img}/>
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} views • {format(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Cards;
