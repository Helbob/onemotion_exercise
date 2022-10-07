"use strict";

import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".box", { transform: "rotate(360deg)" }, { delay: stagger(0.2) });
