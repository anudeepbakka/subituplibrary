import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faCircleCheck,
  faCircleXmark,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import styles from './ActionButton.module.scss';

const iconsMap = {
  check: faCircleCheck,
  xmark: faCircleXmark,
  eye: faEye,
  play: faPlay
};

function ActionButton({ onClick, backgroundColor, icon, disabled, ariaLabel }) {
  const selectedIcon = iconsMap[icon];
  
  return (
    <div 
    onClick={disabled ? undefined : onClick}
    className={`align-items-center ${styles.actionButton}`}
    role="button"
    tabIndex={disabled ? -1 : 0}
    style={{
      backgroundColor,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1
    }}
    aria-label={ariaLabel}
    aria-disabled={disabled}
  >
    <FontAwesomeIcon icon={selectedIcon} size="lg" />
  </div>
  );
}

export default ActionButton;