import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Get started',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn more',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Contact us',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled button',
  },
};
