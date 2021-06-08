import { ApolloProvider } from "@apollo/client";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "normalize.css";

import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";

import apolloClient from "#root/api/apolloClient";
import Root from "#root/components";

render(
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </ApolloProvider>,
  document.getElementById("app")
);
