import Button from '../components/Button/Button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Buttons/Button',
  argTypes: {
    type: {
      options: ['decline', 'approve', 'primary', 'close'],
      control: {
        type: 'select'
      },
      description: 'Determines the button style variant'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Button size',
      mapping: {
        small: 'sm',
        medium: 'md',
        large: 'lg',
      },
    },
    children: {
      control: 'text',
      description: 'Button content'
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the button and reduces opacity to 50%'
    }
  },
  args: {
    type: 'primary',
    children: 'Click Me',
    disabled: false,
    size:'md',
    onClick: () => {
      console.log('Button clicked')
    }
  },
}

export default meta

export const Primary = {
  args: {
    type: 'primary',
    children: 'Primary'
  }
}

export const Decline = {
  args: {
    type: 'decline',
    children: 'Decline'
  }
}

export const Approve = {
  args: {
    type: 'approve',
    children: 'Approve'
  }
}

export const Close = {
  args: {
    type: 'close',
    children: 'Close'
  }
}

export const DisabledButton = {
  args: {
    type: 'primary',
    children: 'Disabled Button',
    disabled: true
  },
}