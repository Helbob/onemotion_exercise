"use strict";

import { animate, stagger, timeline } from "https://cdn.skypack.dev/motion";

/*animate(
  ".ball",
  {
    x: 400,
    rotate: 200,
  },
  { duration: 2 }
).finished.then(() => {
  animate(".ball", { scale: 0 });
}); */

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 2 }],
  [".ball", { scale: 0.3 }],
  [".ball", { scale: 0.3, x: 1370, y: -730 }],
];

timeline(sequence);
