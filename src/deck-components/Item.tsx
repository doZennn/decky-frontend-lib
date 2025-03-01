import { ReactNode } from 'react';

export interface ItemProps {
  label?: ReactNode;
  description?: ReactNode;
  layout?: 'below' | 'inline';
  icon?: ReactNode;
  bottomSeparator?: 'standard' | 'thick' | 'none';
  indentLevel?: number;
  tooltip?: string;
}
