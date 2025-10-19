import type { Meta, StoryObj } from '@storybook/react';
import { SoftwareFeatures } from './SoftwareFeatures';

const meta: Meta<typeof SoftwareFeatures> = {
  title: 'Components/SoftwareFeatures',
  component: SoftwareFeatures,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SoftwareFeatures>;

export const Default: Story = {};
