import styles from './Button.module.scss';

import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  label: string;
  size?: 'small' | 'medium' | 'large';
}

export function Button(props: ButtonProps) {
  const { label } = props;

  return <button className={styles.button}>{label}</button>;
}
