import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 0px auto;
	padding-top: 120px;
	position: relative;
	width: 1170px;
`;

interface PortfolioLayoutProps {
	children: React.ReactNode;
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => <Container>{children}</Container>;

export default PortfolioLayout;
