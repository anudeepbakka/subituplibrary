import PageMessageInfo from '../components/PageMessageInfo/PageMessageInfo';

const meta = {
  component: PageMessageInfo,
  tags: ['autodocs'],
  title: 'Components/PageMessageInfo',
  argTypes: {
    type: {
      control: 'select',
      options: ['nodata', 'warning', 'error', 'calendar'],
      description: 'Determines the icon and style of the message'
    },
    label: {
      control: 'text',
      description: 'Main heading text for the message'
    },
    text: {
      control: 'text',
      description: 'Additional descriptive text below the heading'
    }
  }
};

export default meta;


export const Default = {
  args: {
    type: 'nodata',
    label: 'No Data Available',
    text: 'There are no Pending Adds for the selected positions.'
  }
};


export const Warning = {
  args: {
    type: 'warning',
    label: 'Warning',
    text: 'Please review the following information carefully.'
  }
};


export const Error = {
  args: {
    type: 'error',
    label: 'Error Occurred',
    text: 'Unable to process your request. Please try again later.'
  }
};


export const Calendar = {
  args: {
    type: 'calendar',
    label: 'No Events',
    text: 'There are no events scheduled for the selected date.'
  }
};


export const LabelOnly = {
  args: {
    type: 'nodata',
    label: 'No Results Found'
  }
};


export const TextOnly = {
  args: {
    type: 'warning',
    text: 'This is a message without a heading.'
  }
};


export const LongContent = {
  args: {
    type: 'calendar',
    label: 'Extended Information',
    text: 'This is a longer message that demonstrates how the component handles extended content. It might wrap to multiple lines and should maintain proper spacing and alignment with the icon.'
  }
};