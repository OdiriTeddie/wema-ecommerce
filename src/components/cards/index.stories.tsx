import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "./";

const meta: Meta<typeof Card> = {
  title: "Components/cards",
  component: Card,
};

export default meta;

type Story = StoryObj<CardProps>;

const Template: Story = {
  render: (args) => <Card {...args} />,
};

export const TwoTexts: Story = {
  ...Template,
  args: {
    imageSrc:
      "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-26-1100x730.jpg",
    topLeftText: "Top Left",
    topRightText: "Top Right",
    link: "#",
    linkText: "Learn More",
  },
};

export const OneTopLeftText: Story = {
  ...Template,
  args: {
    imageSrc:
      "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-26-1100x730.jpg",
    topLeftText: "Top Left",
    link: "#",
    linkText: "Learn More",
  },
};
export const OneTopRightText: Story = {
  ...Template,
  args: {
    imageSrc:
      "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-26-1100x730.jpg",
    topRightText: "Top Right",
    link: "#",
    linkText: "Learn More",
  },
};
