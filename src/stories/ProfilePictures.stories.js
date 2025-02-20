import ProfilePictures from '../components/ProfilePictures/ProfilePictures';

const meta = {
  component: ProfilePictures,
  tags: ['autodocs'],
  title: 'Profile/ProfilePictures',
};

export default meta;

export const ThreeImages = {
  args: {
    imageUrls: ['./profile.png', './profile.png', 'https://devimages.subitup.com/api/Profile/Images?emailId=9FIIygp6xB%2fH1fh8aKtlAJE7eFBmvTQiFrhSr92dJjU%3d'],    dimensions: 50, 
    requestedCount: 3, 
  },
};

export const FiveImages = {
  args: {
    imageUrls: [
      './profile.png',
      'https://devimages.subitup.com/api/Profile/Images?emailId=9FIIygp6xB%2fH1fh8aKtlAJE7eFBmvTQiFrhSr92dJjU%3d',
      './profile.png',
      './profile.png',
      './profile.png',
    ],
    dimensions: 50, 
    requestedCount: 5, 
  },
};

export const OneImage = {
  args: {
    imageUrls: ['https://devimages.subitup.com/api/Profile/Images?emailId=9FIIygp6xB%2fH1fh8aKtlAJE7eFBmvTQiFrhSr92dJjU%3d'],
    dimensions: 50, 
    requestedCount: 1, 
  },
};
