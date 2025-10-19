import type { Meta, StoryObj } from '@storybook/react';
import { Reliability } from './Reliability';

const meta: Meta<typeof Reliability> = {
  title: 'Components/Reliability',
  component: Reliability,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Reliability>;

export const Default: Story = {};
