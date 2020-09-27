import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0px auto;
    padding-top: 120px;
    position: relative;
    width: 1170px;
`;

const PortfolioWrapper = styled.div``;

interface PortfolioLayoutProps {
  children: React.Node;
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => (
  <Container>
    <PortfolioWrapper>{children}</PortfolioWrapper>
  </Container>
);

export default PortfolioLayout;
