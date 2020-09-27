// packages
import * as React from 'react';
import styled from 'styled-components';

// types
import { PortfolioCardProps } from '../shared/types/portfolioTypes';

const PortfolioCard = ({
	id,
	picture,
	title,
	description,
	projectInformation,
	repoData: { repoUrl, isPrivateRepo, liveSite },
}: PortfolioCardProps) => {
	console.log({ id, picture, title, description, projectInformation });
	return <div>{title}</div>;
};

export default PortfolioCard;
