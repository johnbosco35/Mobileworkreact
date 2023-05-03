/** @format */

import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <Container>
      <h1>Digital Transformation for Individuals and Businesses.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
        consequuntur assumenda in molestias velit asperiores adipisci aut amet
        facilis delectus placeat tempora sit voluptatem, rerum repudiandae?
        Aspernatur ex beatae ab, accusantium et saepe amet quo neque ullam,
        dolores tempore possimus porro, quam veniam natus quidem quas sapiente
        illo voluptatem numquam in esse voluptatum. Quaerat quas unde aut ipsum
        impedit deleniti consequatur neque officiis accusantium, voluptatum
        deserunt quos molestias quam a obcaecati suscipit assumenda esse
        consectetur eos ratione dolorem aperiam soluta nulla? Doloribus ipsum
        error corporis possimus, at blanditiis facere nostrum, in aliquam
        temporibus quasi corrupti beatae explicabo, veritatis minus
        consequuntur.
      </p>
    </Container>
  );
};

export default Text;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  background-color: black;
  margin-bottom: 70px;
  height: 400px;

  @media screen and (max-width: 900px) {
    height: 600px;
  }

  h1 {
    font-size: 45px;
    margin-top: 45px;
    font-family: Inria serif;
    color: white;

    @media screen and (max-width: 900px) {
      font-size: 24px;
    }
  }

  p {
    width: 75%;
    text-align: center;
    margin: 0;
    font-size: 18px;
    line-height: 25px;
    color: silver;

    @media screen and (max-width: 900px) {
      width: 100%;
      font-size: 15px;
    }
  }
`;
