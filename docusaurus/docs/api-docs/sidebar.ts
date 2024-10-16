import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-v1.0.0-/dev-api",
    },
    {
      type: "category",
      label: "undergrad-majors",
      items: [
        {
          type: "doc",
          id: "api-v1.0.0-/access-all-undergrad-majors-at-osu",
          label: "Access all undergrad majors at OSU",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "student-orgs",
      items: [
        {
          type: "doc",
          id: "api-v1.0.0-/access-all-student-orgs-at-osu",
          label: "Access all student orgs at OSU",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
