import React from 'react';
import styles from './LabelValue.module.scss';
import '../customStyles.scss';

function LabelValue(props) {
  const {
    label = '',
    value = '',
    labelColorClass,
    valueColorClass
  } = props;
  console.log(props);
  return (
    <div className={`${styles.labelValueComponent } ms-3 ${styles.shiftBegins}`}>
      <div className={`${styles.label} ${labelColorClass}`}>
        {label}
      </div>
      <div className={`${styles.value} ${valueColorClass}`}>
        {value}
      </div>
    </div>
  )
}

export default LabelValue
