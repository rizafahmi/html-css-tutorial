import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/rizafahmi/html-css-tutorial.git",
    user: {
      name: "Riza Fahmi",
      email: "rizafahmi@gmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy complete!");
  },
);
