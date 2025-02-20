import { useState } from 'react';
import OffcanvasComponent from '../components/Offcanvas/OffCanvas';

const meta = {
  component: OffcanvasComponent,
  tags: ['autodocs'],
  title: 'Generic/Offcanvas',
  argTypes: {
    title: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: ['start', 'bottom'],
    },
    offset: {
      control: 'number',
    },
    width: {
      control: 'number',
    },
  },
  args: {
    title: 'Offcanvas Title',
    placement: 'end',
    offset: 0,
    width: 40,
  },
};

export default meta;

const InteractiveTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        style={{
          margin: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleToggle}
      >
        Toggle Offcanvas
      </button>
      <OffcanvasComponent {...args} isOpen={isOpen} onClose={handleToggle} />
    </>
  );
};

export const Default = {
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    title: 'Default Offcanvas',
  },
};

export const CustomWidthAndOffset = {
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    title: 'Custom Offcanvas',
    offset: 50,
    width: 60,
  },
};

export const PositionedStart = {
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    title: 'Offcanvas on Start',
    placement: 'start',
  },
};
