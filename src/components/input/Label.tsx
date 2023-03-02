import { Text } from '../styleGuide/text/Text';

export interface labelPropsType {
  label?: string;
  className?: string;
}

export const Label = ({ label, className }: labelPropsType) => {
  return (
    <Text className={className} margin={['left', 6]} size="bodyM" color="gray6">
      {label}
    </Text>
  );
};
