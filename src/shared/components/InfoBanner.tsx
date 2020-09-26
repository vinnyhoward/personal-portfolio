import * as React from 'react';
import styled from 'styled-components';

const avatarExample =
  'https://avatars1.githubusercontent.com/u/31226035?s=460&u=651a3f3cfd0f899be47765dd849c470db13d8fb4&v=4';

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

interface InfoBannerProps {
  image: string;
}

const InfoBanner = ({ image }: InfoBannerProps) => (
  <>
    <ImageParentContainer>
      <ImageWrapper>
        <BlockContent aria-hidden="true"></BlockContent>
        <Image type="image/webp" src={image} alt="profile picture" />
      </ImageWrapper>
    </ImageParentContainer>
  </>
);

export default InfoBanner;
