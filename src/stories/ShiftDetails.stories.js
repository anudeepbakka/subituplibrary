import ShiftDetails from '../components/ShiftDetails/ShiftDetails'
import 'bootstrap/dist/css/bootstrap.min.css'

const meta = {
  component: ShiftDetails,
  tags: ['autodocs'],
  title: 'ShiftDetails/ShiftDetails',
  argTypes: {
    shiftColor: {
      control: 'color'
    },
    shiftTitle: {
      control: 'text'
    },
    positionName: {
      control: 'text'
    },
    positionColor: {
      control: 'color'
    }
  },
  args: {
    shiftColor: '#4CAF50',
    shiftTitle: 'Morning Shift',
    positionName: 'Manager',
    positionColor: '#FF5733'
  }
}

export default meta

export const Default = {
  args: {
    shiftColor: '#4CAF50',
    shiftTitle: 'Morning Shift',
    positionName: 'Manager',
    positionColor: '#FF5733'
  }
}

export const CustomShift = {
  args: {
    shiftColor: '#2196F3',
    shiftTitle: 'Night Shift',
    positionName: 'Assistant',
    positionColor: '#FFC107'
  }
}
