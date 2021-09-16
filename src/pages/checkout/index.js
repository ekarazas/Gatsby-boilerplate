import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { useRouter } from "apis/history";

import { useQuery } from "styles/breakpoints";

import { Button, PrimaryButton, Image, TextBase } from "components";

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();

  return (
    <SectionWrapper>
      Hello
      {isMobile && (
        <Link to="/">
          <Button>labas</Button>
        </Link>
      )}
      {isTablet && (
        <PrimaryButton color="blue" onClick={goToLanding}>
          Labas
        </PrimaryButton>
      )}
      <Image src="mr_bean" />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: red;
`;

export default Checkout;
