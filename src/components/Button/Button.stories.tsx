import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: "Secondary Button",
};

export const Large = Template.bind({});
Large.args = {
  secondary: true,
  size: "large",
  label: "Large Button",
};

export const Small = Template.bind({});
Small.args = {
  secondary: true,
  size: "small",
  label: "Small Button",
};
