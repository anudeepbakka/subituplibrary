import ShiftDetailsWithTime from '../components/ShiftDetailsWithTime/ShiftDetailsWithTime'

import 'bootstrap/dist/css/bootstrap.min.css'

const meta = {
  component: ShiftDetailsWithTime,
  tags: ['autodocs'],
  title: 'ShiftDetails/ShiftDetailsWithTime',
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
    },
    date: {
      control: 'text'
    },
    startTime: {
      control: 'text'
    },
    endTime: {
      control: 'text'
    },
    duration: {
      control: 'text'
    }
  },
  args: {
    shiftColor: '#4CAF50',
    shiftTitle: 'Morning Shift',
    positionName: 'Manager',
    positionColor: '#FF5733',
    date: '2024/10/10',
    startTime: '2024-10-10T15:00:00',
    endTime: '2024-10-10T18:00:00',
    duration: '8 hours'
  }
}

export default meta

export const Default = {
  args: {
    shiftColor: '#4CAF50',
    shiftTitle: 'Morning Shift',
    positionName: 'Manager',
    positionColor: '#FF5733',
    date: '2024/10/10',
    startTime: '2024-10-10T15:00:00',
    endTime: '2024-10-10T18:00:00',
    duration: '8 hours'
  }
}

export const CustomShift = {
  args: {
    shiftColor: '#2196F3',
    shiftTitle: 'Night Shift',
    positionName: 'Assistant',
    positionColor: '#FFC107',
    date: '2024/10/10',
    startTime: '2024-10-10T15:00:00',
    endTime: '2024-10-10T18:00:00',
    duration: '8 hours'
  }
}
