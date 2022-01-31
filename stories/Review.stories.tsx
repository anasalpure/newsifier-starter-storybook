import React from "react";
import { storiesOf } from "@storybook/react";

import { Review } from "../src";

storiesOf("Review", module)
  .add("rate 6/10", () => <Review rate={6} topRate={10} />)
  .add("rate 2/5", () => <Review rate={2} />)
  .add("rate 4/8", () => <Review rate={4} topRate={8} />);
