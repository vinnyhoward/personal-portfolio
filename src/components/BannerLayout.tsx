import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 940px;
	max-width: 100%;
	margin: 0px auto;
	padding: 150px 10px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
`;

interface BannerLayoutProps {
	children: React.ReactNode;
}

const BannerLayout = ({ children }: BannerLayoutProps) => {
	return <Container>{children}</Container>;
};

export default BannerLayout;
