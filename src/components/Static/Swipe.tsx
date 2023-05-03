/** @format */

import React from "react";
import styled from "styled-components";

interface SwipeObj {
  fd: string;
  image: string;
  title: string;
  desc: string;
}

const Swipe: React.FC<SwipeObj> = ({ fd, image, title, desc }) => {
  return (
    <Container>
      <Wrapper fd={fd}>
        <Box>
          <Img src={image} />
        </Box>
        <Hold>
          <h2>{title}</h2>
          <p>{desc}</p>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Swipe;

const Wrapper = styled.div<{ fd: string }>`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const Box = styled.div`
  width: 650px;
  height: 350px;
  /* background-color: gold; */

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Hold = styled.div`
  width: 600px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
  p {
    width: 75%;
    font-size: 19px;
    line-height: 25px;

    @media screen and (max-width: 900px) {
      font-size: 16px;
      text-align: center;
      width: 100%;
    }
  }

  h2 {
    font-size: 40px;
    font-family: Inria serif;

    @media screen and (max-width: 900px) {
      font-size: 30px;
      text-align: center;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
