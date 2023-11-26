import { Button } from '../ui/button/button'
import { IconBack } from '../assets/icons/icon-back'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'MyButton',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: 'small',
    icon: IconBack
  }
}

export const Middle: Story = {
  args: {
    size: 'middle',
    icon: IconBack
  }
}
export const Big: Story = {
  args: {
    size: 'big',
    icon: IconBack
  }
}
