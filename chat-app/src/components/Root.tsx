import { gql } from "@apollo/client";
import { useRecoilState } from "recoil";
import React, { useEffect, useState } from "react";
import { Spinner } from "@blueprintjs/core";
import styled from "styled-components";
import apolloClient from "#root/api/apolloClient";
import userSessionAtom from "#root/recoil/atoms/userSession";

const SpinnerWrapper = styled.main`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const query = gql`
  query {
    userSession(me: true) {
      user {
        username
      }
    }
  }
`;

function Root() {
  const [isLoading, setIsLoading] = useState(true);
  const [userSession, setUserSession] = useRecoilState(userSessionAtom);

  const apolloRequest = async () => {
    const res = await apolloClient.query({ query });
    const userSession = res.data?.userSession ?? null;
    setUserSession(userSession);
    setIsLoading(false);
  };

  useEffect(() => {
    apolloRequest();
  }, []);

  return isLoading ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <pre>{JSON.stringify(userSession, null, 2)}</pre>
  );
}

export default Root;
