import React from "react";
import BackImg from "../../../images/boxImage.png";

import {
  DetailContainer,
  DetailWrapper,
  Img,
  TextWrapper,
  Heading,
  BtnWrap,
  Button,
} from "./DetailElements";

const DetailSection = () => {
  const handleOnClickNavLink = () => {
    window.open('/farms')
  }

  return (
    <DetailContainer>
      <DetailWrapper>
        <Img src={BackImg} alt="Background Image"></Img>
        <TextWrapper>
          <Heading>
            We support project sustainable fundraising for the NEAR Ecosystem
          </Heading>
          <BtnWrap>
            <Button onClick={handleOnClickNavLink}>Launch App ></Button>
          </BtnWrap>
          {/* TODO: */}
          {/* <BtnWrap>
            <Button>Launch App ></Button>
          </BtnWrap> */}
        </TextWrapper>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailSection;
