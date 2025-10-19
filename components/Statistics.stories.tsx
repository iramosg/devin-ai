import type { Meta, StoryObj } from '@storybook/react';
import { Statistics } from './Statistics';

const meta: Meta<typeof Statistics> = {
  title: 'Components/Statistics',
  component: Statistics,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Statistics>;

export const Default: Story = {};
