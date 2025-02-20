import ActionButton from '../components/ActionButton/ActionButton'

const meta = {
  component: ActionButton,
  tags: ['autodocs'],
  title: 'Buttons/ActionButton',
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    icon: {
      options: ['check', 'xmark', 'eye'],
      control: { type: 'select' }
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the button and reduces opacity to 50%'
    },
    onClick: { action: 'clicked' }
  },
  args: {
    backgroundColor: '#4CAF50',
    icon: 'check',
    disabled:false,
    onClick: () => {
      console.log('Button clicked')
    }
  }
}

export default meta

export const Default = {
  args: {
    backgroundColor: '#4CAF50',
    icon: 'check',
  }
}

export const WithXmarkIcon = {
  args: {
    backgroundColor: '#E83E37',
    icon: 'xmark',
  }
}

