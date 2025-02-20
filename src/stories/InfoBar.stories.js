import InfoBar from '../components/InfoBar/InfoBar'


const meta = {
  component: InfoBar,
  tags: ['autodocs'],
  title: 'Generic/InfoBar',
  argTypes: {
    type: {
      options: ['success', 'info'],
      control: { type: 'select' }
    },
    icon:{
      options:['bell' , 'thumbsup'],
      control:{type:'select'}
    },
    children: {
      control: 'text'
    }
  },
  args: {
    type: 'info',
    icon:'bell',
    children: 'This is an info bar.'
  }
}

export default meta

export const Info = {
  args: {
    type: 'info',
    icon:'bell',
    children: 'This is an informational message.'
  }
}

export const Success = {
  args: {
    type: 'success',
    icon:'thumbsup',
    children: 'This is a success message!'
  }
}
