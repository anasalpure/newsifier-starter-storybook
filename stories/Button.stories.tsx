import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../src";

storiesOf("Button", module)
  .add("Primary", () => <Button variant="primary">Primary</Button>)
  .add("Secondary", () => <Button variant="secondary">Secondary</Button>)
  .add("Error", () => <Button variant="error">Error</Button>)
  .add("Disabled", () => <Button variant="disabled">Disabled</Button>)
  .add("Custom", () => <Button variant="custom">Custom</Button>);
