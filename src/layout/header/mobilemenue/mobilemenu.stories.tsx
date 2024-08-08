import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MobileMenu } from './mobileMenu';

export default {
  title: 'Components/MobileMenu',
  component: MobileMenu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    navLinks: { control: 'object' },
  },
} as Meta<typeof MobileMenu>;

type Story = StoryObj<typeof MobileMenu>;

export const Default: Story = {
  args: {
    isOpen: true,
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      {
        label: 'Services',
        href: '/services',
        dropdown: [
          { label: 'Web Development', href: '/services/web-dev' },
          { label: 'Design', href: '/services/design' },
        ],
      },
      { label: 'Contact', href: '/contact' },
    ],
  },
};
