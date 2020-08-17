export default interface PropsType {
  value?: number;
  height?: string;
  defaultValue?: number;
  scrollThreshold: number;
  lineWidth?: string | number;
  disabled?: boolean;
  swipeable?: boolean;
  scrollable?: boolean;
  direction?: 'horizontal' | 'vertical';
  onChange?: (index?: number) => void;
}
