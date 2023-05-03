/** @format */

import React from "react";
import styled from "styled-components";
import Swipe from "../Static/Swipe";
import Text from "./Text";
import acc from "../../assets/acc.jpg";
import hack from "../../assets/hack.png";

const ThirdComp = () => {
  return (
    <Container>
      <h1>Find what you’re looking for and more</h1>
      <Swipe
        fd="swdw"
        title="Grow your career with us"
        desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nobis!
          Ut autem veritatis animi qui ipsum temporibus ratione deserunt, quis
          molestias perferendis repellendus ab laborum deleniti! Quae quod
          blanditiis laborum."
        image={acc}
      />
      <Text />
      <Swipe
        fd=""
        title="Set your own rate"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          harum dicta ad voluptates, delectus repellendus. Voluptas cupiditate
          eveniet inventore asperiores, corporis velit libero ipsa dolor sint
          quam laborum harum. Nobis?"
        image={hack}
      />
    </Container>
  );
};

export default ThirdComp;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-top: 65px;
    font-family: Inria serif;

    @media screen and (max-width: 900px) {
      font-size: 30px;
      text-align: center;
    }
  }
`;
