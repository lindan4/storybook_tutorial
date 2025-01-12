import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';
import { View } from 'react-native';

const meta = {
    title: 'Card',
    component: Card,
    decorators: [
      (Story) => (
        <View style={{ padding: 16, alignItems: 'flex-start' }}>
          <Story />
        </View>
      ),
    ],
  } satisfies Meta<typeof Card>;

export default meta

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};