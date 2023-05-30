import { Example1 } from "./templates/Example1";
import { Example2 } from "./templates/Example2";

export const routes = [
  {
    path: "example1",
    template: Example1,
    values: {
      logo: "Log Name",
      role: "Your Role",
      name: "Your Name",
    },
  },
  {
    path: "example2",
    template: Example2,
    values: {
      logo: "Log Name",
      role: "Your Role",
      name: "Your Name",
    },
  },
];
