/** @format */

import React from "react";
import styled from "styled-components";

interface iMage {
  src?: string;
}

const Logos: React.FC<iMage> = ({ src }) => {
  return (
    <div>
      <Container>
        <Image src={src} />
      </Container>
    </div>
  );
};

export default Logos;

const Image = styled.img`
  height: 30px;

  @media screen and (max-width: 500px) {
    height: 10px;
  }
`;
const Container = styled.div``;
