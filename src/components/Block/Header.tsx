/** @format */

import styled from "styled-components";
import {
  AiOutlineMenu,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const ShowToggle = () => {
    setShow(!show);
  };

  const contentSpring = useSpring({
    maxHeight: show ? "250px" : "0",
    config: { duration: 500 },
  });

  return (
    <div>
      <Container>
        {show ? (
          <Drop>
            <P style={contentSpring}>Product</P>
            <P style={contentSpring}>Project</P>
            <P style={contentSpring}>About</P>
            <P style={contentSpring}>Contact</P>
          </Drop>
        ) : null}
        <Main>
          <LinkData>
            <MyLink>Products</MyLink>
            <MyLink>Projects</MyLink>
          </LinkData>
          <Image>Image</Image>
          <LinkData>
            <MyLink>About</MyLink>
            <MyLink>Contact</MyLink>
          </LinkData>
        </Main>{" "}
        <Main2>
          <Image>Image</Image>
          <LinkData>
            <MyLink
              onMouseEnter={() => {
                onHover();
              }}
              onMouseLeave={() => {
                onHover();
              }}
            >
              Products {hover ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}{" "}
              {hover ? (
                <Div>
                  <div>
                    <p> Armchair </p>
                    <p> Beds</p>
                    <p> Bedside Tables</p>
                    <p>Benches</p>
                    <p> Center Tables</p>
                    <p> Chaise Lounges</p>
                    <p> Chest of Drawers</p>
                  </div>
                  <div>
                    <p> Consoles</p>
                    <p> Dining Chairs</p>
                    <p> Dining Tables</p>
                    <p> Side Tables</p>
                    <p> Sideboards</p>
                    <p> Sofas</p>
                  </div>
                </Div>
              ) : null}
            </MyLink>
            <MyLink>Projects</MyLink>
            <MyLink>About</MyLink>
            <MyLink>Contact</MyLink>
          </LinkData>

          {show ? (
            <Close size={30} onClick={ShowToggle} />
          ) : (
            <Icon onClick={ShowToggle} />
          )}
        </Main2>
      </Container>
    </div>
  );
};

export default Header;

const P = styled(animated.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid silver;
  height: 60px;
`;

const Close = styled(AiOutlineClose)`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    color: white;
    font-size: 30px;
    margin-right: 20px;
  }
`;

const Drop = styled(animated.div)`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
    height: 250px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
    margin-top: 89px;
  }
`;

const Div = styled.div`
  width: 350px;
  /* height: 200px; */
  z-index: 6;
  border-radius: 5px;
  background-color: #123456;
  position: absolute;
  top: 60px;
  right: 230px;
  display: flex;
  padding: 5px;
  justify-content: space-around;
`;

const Icon = styled(AiOutlineMenu)`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    color: white;
    font-size: 30px;
    margin-right: 20px;
  }
`;

const Image = styled.div`
  font-weight: 900;
  font-size: 30px;
  padding: 0 10px;
`;

const MyLink = styled.div`
  margin: 0 10px;
`;

const LinkData = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
    display: none;
    color: white;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Main2 = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    color: white;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Main = styled.div`
  min-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
`;
