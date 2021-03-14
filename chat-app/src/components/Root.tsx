import React from "react";
import { Button, Intent } from "@blueprintjs/core";

interface RootProps {}

function Root({}: RootProps): JSX.Element {
  return (
    <main>
      <Button intent={Intent.SUCCESS}>Click Me</Button>
    </main>
  );
}

export default Root;
