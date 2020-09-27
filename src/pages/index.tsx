// packages
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// components
import BannerLayout from '../components/BannerLayout';
import InfoBanner from '../components/InfoBanner';
import PortfolioLayout from '../components//PortfolioLayout';
import PortfolioCard from '../components//PortfolioCard';

// types
import { PortfolioCardProps } from '../shared/types/portfolioTypes';

const App = () => {
	const data = useStaticQuery(graphql`
		query {
			allPortfolioData {
				nodes {
					picture
					projectInformation
					description
					id
					title
					repoData {
						liveSite
						isPrivateRepo
						repoUrl
					}
				}
			}
		}
	`);

	const portfolioMetaData = data.allPortfolioData.nodes || [];

	const renderPortfolioData = () => {
		return portfolioMetaData.map(
			({ id, picture, title, description, projectInformation, repoData }: PortfolioCardProps) => (
				<PortfolioCard key={id} {...{ id, picture, title, description, projectInformation, repoData }} />
			),
		);
	};

	return (
		<>
			<BannerLayout>
				<InfoBanner />
			</BannerLayout>
			<PortfolioLayout>{renderPortfolioData()}</PortfolioLayout>
		</>
	);
};

export default App;
