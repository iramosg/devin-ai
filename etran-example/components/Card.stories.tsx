import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'feature', 'stat'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p>This is a default card with some content inside.</p>
      </div>
    ),
  },
};

export const Feature: Story = {
  args: {
    variant: 'feature',
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Feature Card</h3>
        <p>This is a feature card with dark background.</p>
      </div>
    ),
  },
};

export const Stat: Story = {
  args: {
    variant: 'stat',
    children: (
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">2x</div>
        <p className="text-sm">Double Your Productivity</p>
      </div>
    ),
  },
};
