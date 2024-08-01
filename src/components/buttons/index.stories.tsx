import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
    onClick: () => alert('Primary Button clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    onClick: () => alert('Secondary Button clicked!'),
  },
};

export const WithChildren: Story = {
  args: {
    children: (
      <>
        <span className="icon">🔥</span>
        <span>Button with Icon</span>
      </>
    ),
    onClick: () => alert('Button with Icon clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    onClick: () => alert('Small Button clicked!'),
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    onClick: () => alert('Large Button clicked!'),
    children: "Button",
  },
};
