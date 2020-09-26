import * as React from 'react';
import styled from 'styled-components';
import { GithubFilled, InstagramOutlined, FacebookFilled, LinkedinFilled } from '@ant-design/icons';

const ImageParentContainer = styled.div`
  width: 270px;
  height: 270px;
  padding: 30px;
  border-radius: 50%;
  margin: 0px auto;
  border: 1px solid rgb(237, 237, 237);
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const BlockContent = styled.div`
  width: 100%;
  padding-bottom: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: none 0s ease 0s;
  border-radius: 50%;
`;

const DetailsWrapper = styled.div`
  padding-left: 30px;

  h1 {
    font-size: 30px;
    font-weight: 400;
    font-family: Poppins, sans-serif;
    color: rgb(41, 41, 41);
    margin-bottom: 20px;
  }

  p {
    color: rgb(41, 41, 41);
    font-size: 15px;
    line-height: 2;
  }

  }
`;

const SocialMediaWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  display: inline-flex;
`;

const GithubIcon = styled(GithubFilled)`
  list-style: none;
  position: relative;
  margin-right: 20px;
  font-size: 18px;
`;

const InstagramIcon = styled(InstagramOutlined)`
  list-style: none;
  position: relative;
  margin-right: 20px;
  font-size: 18px;
`;

const FacebookIcon = styled(FacebookFilled)`
  list-style: none;
  position: relative;
  margin-right: 20px;
  font-size: 18px;
`;

const LinkedinIcon = styled(LinkedinFilled)`
  list-style: none;
  position: relative;
  margin-right: 20px;
  font-size: 18px;
`;

interface InfoBannerProps {
  image: string;
}

const InfoBanner = ({ image }: InfoBannerProps) => (
  <>
    <ImageParentContainer>
      <ImageWrapper>
        <BlockContent aria-hidden="true"></BlockContent>
        <Image sizes="(max-width: 210px) 100vw, 210px" type="image/webp" src={image} alt="profile picture" />
      </ImageWrapper>
    </ImageParentContainer>
    <DetailsWrapper>
      <h1>
        Hi! My name is <b>Vincent</b>
      </h1>
      <p>
        Breakfast procuring no end happiness allowance assurance frank. Met simplicity nor difficulty unreserved who.
        Entreaties mr conviction dissimilar me astonished estimating cultivated.
      </p>
      <SocialMediaWrapper>
        <GithubIcon />
        <LinkedinIcon />
        <InstagramIcon />
        <FacebookIcon />
      </SocialMediaWrapper>
    </DetailsWrapper>
  </>
);

export default InfoBanner;
