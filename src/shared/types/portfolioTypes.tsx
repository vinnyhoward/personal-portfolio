export interface RepoDataProps {
	repoUrl: string;
	isPrivateRepo: boolean;
	liveSite: string;
}

export interface PortfolioCardProps {
	id: string;
	picture: string;
	title: string;
	description: string;
	projectInformation: string;
	repoData: RepoDataProps;
}