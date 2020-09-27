// packages
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GithubFilled, InstagramOutlined, FacebookFilled, LinkedinFilled } from '@ant-design/icons';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

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
  padding: 30px;
  margin-top: 25px;

  h1 {
    font-size: 30px;
    font-weight: 400;
    font-family: Poppins, sans-serif;
    color: rgb(41, 41, 41);
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    color: rgb(41, 41, 41);
    font-size: 15px;
    line-height: 2;
    text-align: center;
  }
  }
`;

const SocialMediaWrapper = styled.div`
	margin: 0px;
	padding: 0px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
`;

const GithubIcon = styled(GithubFilled)`
	list-style: none;
	position: relative;
	margin-right: 25px;
	font-size: 18px;
`;

const InstagramIcon = styled(InstagramOutlined)`
	list-style: none;
	position: relative;
	margin-right: 25px;
	font-size: 18px;
`;

const FacebookIcon = styled(FacebookFilled)`
	list-style: none;
	position: relative;
	margin-right: 25px;
	font-size: 18px;
`;

const LinkedInIcon = styled(LinkedinFilled)`
	list-style: none;
	position: relative;
	margin-right: 25px;
	font-size: 18px;
`;

const BackgroundText = styled.div`
	font-size: 20vw;
	font-weight: 700;
	line-height: 1;
	color: rgb(41, 41, 41);
	opacity: 0.02;
	position: absolute;
	top: 40%;
	left: 0px;
	width: 100%;
	text-align: center;
	pointer-events: none;
	transform: translateY(-50%);
	font-family: 'Fira Sans', cursive, sans-serif;
`;

interface InfoBannerProps {
	children?: React.ReactNode;
	link?: string;
}

interface SocialMediaLinksProps {
	socialMediaPlatform: string;
	url: string;
	id: number;
}

const AnchorTag = ({ children, link }: InfoBannerProps) => (
	<a href={link} rel="noreferrer" target="_blank">
		{children}
	</a>
);

const InfoBanner = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "personal-photo.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
			allSocialMediaLinks {
				nodes {
					url
					socialMediaPlatform
				}
			}
			portfolioMetaData {
				title
				captions
			}
		}
	`);

	const { placeholderImage, allSocialMediaLinks, portfolioMetaData } = data;

	const renderSocialMediaIcons = () =>
		allSocialMediaLinks.nodes.map(({ socialMediaPlatform, url, id }: SocialMediaLinksProps) => {
			switch (socialMediaPlatform) {
				case 'Github':
					return (
						<AnchorTag key={id} link={url}>
							<GithubIcon />
						</AnchorTag>
					);
				case 'LinkedIn':
					return (
						<AnchorTag key={id} link={url}>
							<LinkedInIcon />
						</AnchorTag>
					);
				case 'Instagram':
					return (
						<AnchorTag key={id} link={url}>
							<InstagramIcon />
						</AnchorTag>
					);
				case 'Facebook':
					return (
						<AnchorTag key={id} link={url}>
							<FacebookIcon />
						</AnchorTag>
					);
			}
		});

	// const boldString = (str, substr) => {
	// 	const strRegExp = new RegExp(substr, 'g');
	// 	return str.replace(strRegExp, <b>substr</b>);
	// };

	return (
		<Wrapper>
			<BackgroundText>WELCOME</BackgroundText>
			<ImageParentContainer>
				<ImageWrapper>
					<BlockContent aria-hidden="true"></BlockContent>
					<Image
						sizes="(max-width: 210px) 100vw, 210px"
						alt="profile picture"
						src={placeholderImage.childImageSharp.fluid.src}
					/>
				</ImageWrapper>
			</ImageParentContainer>
			<DetailsWrapper>
				<h1>{portfolioMetaData.title}</h1>
				<p>{portfolioMetaData.captions}</p>
				<SocialMediaWrapper>{renderSocialMediaIcons()}</SocialMediaWrapper>
			</DetailsWrapper>
		</Wrapper>
	);
};

export default InfoBanner;
