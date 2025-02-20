import Loader from '../components/Loader/loader';

const meta = {
  component: Loader,
  tags: ['autodocs'],
  title: 'Loaders/Loader',
  argTypes: {
    isTransparent: {
      control: 'boolean',
      description: 'When true, adds a transparent overlay behind the loader'
    },
    options: {
      control: 'object',
      description: 'Configuration options for the loader',
    }
  },
  args: {
    isTransparent: false,
    options: {
      text: 'Loading...'
    }
  }
};

export default meta;

// Default loader without transparent background
export const Default = {
  args: {
    isTransparent: false,
    options: {
      text: 'Loading...'
    }
  }
};

// Loader with transparent overlay
export const WithTransparentOverlay = {
  args: {
    isTransparent: true,
    options: {
      text: 'Processing your request...'
    }
  }
};

// Loader without text
export const WithoutText = {
  args: {
    isTransparent: false,
    options: {
      text: ''
    }
  }
};

// Custom text loader
export const CustomText = {
  args: {
    isTransparent: false,
    options: {
      text: 'Please wait while we fetch your data'
    }
  }
};