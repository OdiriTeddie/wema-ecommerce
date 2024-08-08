import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    logoSrc: { control: "text" },
    navLinks: { control: "object" },
  },
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logoSrc: "/path/to/logo.png",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Services",
        href: "/services",
        dropdown: [
          { label: "Web Development", href: "/services/web-dev" },
          { label: "Design", href: "/services/design" },
        ],
      },
      { label: "Contact", href: "/contact" },
    ],
  },
};
