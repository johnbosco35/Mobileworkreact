/** @format */

import React from "react";
import styled from "styled-components";
import { IoLogoFacebook } from "react-icons/io";
import {
  BsLinkedin,
  BsWhatsapp,
  BsGithub,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <Container>
      <Main>
        <One>
          <h1>CodeLab</h1>
        </One>
        <Two>
          <div style={{ width: "300px" }}>
            <Title>Discover Talent</Title>
            <Titleplace>For Companies</Titleplace>
            <Titleplace>Enterprise</Titleplace>
            <Titleplace>Case Studies</Titleplace>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <Title>Find Work</Title>
            <Titleplace>For Techologies</Titleplace>
            <Titleplace>Learning Community</Titleplace>
            <Titleplace>Leadership Program </Titleplace>
            <Titleplace>Resoucer</Titleplace>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Title>CodeLab</Title>
            <Titleplace> About Us </Titleplace>
            <Titleplace> Event </Titleplace>
            <Titleplace> Blog </Titleplace>
            <Titleplace> Press Center </Titleplace>
            <Titleplace> Careers </Titleplace>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <Title>Privacy Policy </Title>
            <Titleplace> Teams and Condition</Titleplace>
            <Titleplace>Modern Slavery Statement</Titleplace>
            <Titleplace> Accessibility Statement </Titleplace>
          </div>
        </Two>
        <Holder>
          <Held>
            <Title>Discover Talent</Title>
            <Titleplace>For Companies</Titleplace>
            <Titleplace>Enterprise</Titleplace>
            <Titleplace>Case Studies</Titleplace>
          </Held>
          <Held>
            <Title>Find Work</Title>
            <Titleplace>For Techologies</Titleplace>
            <Titleplace>Learning Community</Titleplace>
            <Titleplace>Leadership Program </Titleplace>
            <Titleplace>Resoucer</Titleplace>
          </Held>
        </Holder>
        <Holder>
          <Held>
            <Title>CodeLab</Title>
            <Titleplace> About Us </Titleplace>
            <Titleplace> Event </Titleplace>
            <Titleplace> Blog </Titleplace>
            <Titleplace> Press Center </Titleplace>
            <Titleplace> Careers </Titleplace>
          </Held>
          <Held style={{ marginLeft: "45px" }}>
            <Title>Privacy Policy </Title>
            <Titleplace> Teams and Condition</Titleplace>
            <Titleplace>Modern Slavery</Titleplace>
            <Titleplace> Accessibility</Titleplace>
          </Held>
        </Holder>
      </Main>

      <Last>
        <Copy>
          <p>© 2023 OKONKWO ONYEDIKACHI. All right reserved.</p>
        </Copy>
        <Logos>
          <IoLogoFacebook size={30} />
          <BsGithub size={30} />
          <BsLinkedin size={30} />
          <BsWhatsapp size={30} />
          <BsYoutube size={30} />
          <BsInstagram size={30} />
        </Logos>
      </Last>
    </Container>
  );
};

export default Footer;

const Held = styled.div`
  margin: 50px;
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

const Holder = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    width: 430px;
    /* background-color: gold; */
  }
`;

const Last = styled.div`
  width: 350px;
  /* background-color: brown; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Copy = styled.div`
  width: 390px;
  /* background-color: red; */
  margin-bottom: 10px;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    font-size: 13px;
    margin-left: 85px;
  }
`;
const Logos = styled.div`
  width: 350px;
  /* background-color: darkorange; */
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 80%;
    font-size: 10px;
  }
`;

const Titleplace = styled.div`
  margin-left: 25px;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;
const Title = styled.div`
  margin: 25px;
  font-size: 20px;
  font-weight: 43px;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

const One = styled.div`
  width: 150px;
  /* background-color: navy; */
  color: white;
  margin-right: 100px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    margin-left: 10px;
  }
`;
const Two = styled.div`
  width: 790px;
  /* background-color: navajowhite; */
  display: flex;
  margin-left: 90px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;

  @media screen and (max-width: 900px) {
    display: block;
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 500px;
  }
`;
