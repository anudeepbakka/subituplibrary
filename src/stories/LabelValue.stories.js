import LabelValue from '../components/LabelValue/LabelValue'

const meta = {
  component: LabelValue,
  tags: ['autodocs'],
  title: 'Generic/LabelValue',
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    labelColorClass: {
      control: 'text'
    },
    valueColorClass: {
      control: 'text'
    }
  },
  args: {
    label: 'Shift Begins in',
    value: '2 days 12 hours',
    labelColorClass: 'medium-grey',
    valueColorClass: 'dark-red',
  }
}

export default meta

export const Default = {
  args: {
    label: 'Shift Begins in',
    value: '2 days 12 hours'
  }
}

export const CustomColors = {
  args: {
    label: 'Custom Label',
    value: 'Custom Value',
    labelColorClass: '#00FF00',
    valueColorClass: '#FF0000'
  }
}

