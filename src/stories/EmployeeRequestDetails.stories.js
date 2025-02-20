
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/customStyles.scss';
import EmployeeRequestDetails from '../components/EmployeeRequestDetails/EmployeeRequestDetails';
import { action } from '@storybook/addon-actions';

const withStyles = (Story) => {
  return (
    <div className="CircularPro" style={{ padding: '10px', maxWidth: '645px' }}>
      <Story />
    </div>
  );
};

const meta = {
  component: EmployeeRequestDetails,
  tags: ['autodocs'],
  title: 'Employee/EmployeeRequestDetails',
  decorators: [withStyles],
  argTypes: {
    type: {
      options: ['add', 'drop'],
      control: { type: 'select' },
      description: 'Type of request - add shift or drop shift'
    },
    details: {
      control: 'object',
      description: 'Employee request details including conflicts, hours, and wage information'
    },
    handleApprove: {
      action: 'approved',
      description: 'Callback function when request is approved'
    },
    handleDecline: {
      action: 'declined',
      description: 'Callback function when request is declined'  
    }
  },
  args: {
    type: 'add',
    details:{
      employeeKey: 'Y48WoLQUOuI%3d',
      employeeFullName: 'John Doe',
      employeeEmail: 'John.Doe@acsicorp.com',
      encryptedEmployeeEmail: 'yZARysNb2+Em1dVGXKUYRGby6f0O1UJ7OV1roF1tr1s=',
      conflictType: 'global daily hours met or exceeded',
      startTime: '1900-01-01T00:00:00',
      endTime: '1900-01-01T00:00:00',
      deptKey: 'aPOv5y%2bLEsA%3d',
      deptName: 'Message Test 2',
      companyName: 'SubItUp',
      requestedOn: '2025-01-07T11:14:56.16',
      requestedTimeDuration: '14 days 1 hour',
      dailyHours: 3,
      calculatedDailyHours: 2.5,
      weeklyHours: 6,
      calculatedWeeklyHours: 3.5,
      shiftCount: 0,
      isViewAccessOnCalculatedWage: true,
      hourlyWage: 0,
      calculatedWage: 0,
      priorityRank: 1,
      availabilityStatus: 'No Preference'
    },
    handleApprove: action('approved'),
    handleDecline: action('declined')
  }
};

export default meta;


export const AddRequest = {
  args: {
    type: 'add',
    details: {
      ...meta.args.details,
      employeeFullName: 'John Doe with very long name ever',
      employeeEmail: 'JohnWithVeyLongName.Doe@acsicorp.com',
      conflictType: 'no conflicts'
    }
  }
};


export const AddRequestWithConflict = {
  args: {
    type: 'add',
    details: {
      ...meta.args.details,
      conflictType: 'shift conflict',
      calculatedDailyHours: 4,
      calculatedWeeklyHours: 4
    }
  }
};


export const DropRequest = {
  args: {
    type: 'drop',
    details: meta.args.details
  }
};


export const DropRequestWithOvertime = {
  args: {
    type: 'drop',
    details: {
      ...meta.args.details,
      calculatedDailyHours: 8,
      calculatedWeeklyHours: 45
    }
  }
};


export const AddRequestNoWage = {
  args: {
    type: 'add',
    details: {
      ...meta.args.details,
      isViewAccessOnCalculatedWage: false
    }
  }
};


export const AllConflictTypes = {
  parameters: {
    controls: { expanded: true }
  },
  args: {
    type: 'add',
    details: {
      ...meta.args.details,
      conflictType: 'shift conflict',
      calculatedDailyHours: 9,
      dailyHours: 8,
      calculatedWeeklyHours: 45,
      weeklyHours: 40
    }
  }
};