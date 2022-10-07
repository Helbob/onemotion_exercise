"use strict";

import { animate, stagger } from "https://cdn.skypack.dev/motion";
await animate(
  ".ball",
  {
    y: [0, -400, 0],
  },
  { duration: 1, delay: stagger(0.2), repeat: Infinity }
);
