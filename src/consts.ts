import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Alexander Feoktistov",
  EMAIL: "",
  LOCATION: "Lisbon, Portugal",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Alexander Feoktistov | Innovation and Data-Driven Results",
  DESCRIPTION:
    "Over the last 20 years, I've been at the intersection of technology, data, and innovation as a marketing and AdTech leader",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Posts about industry of innovations",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/feoktistov",
  },
  {
    NAME: "facebook",
    HREF: "https://fb.com/feoktistov",
  },
];
