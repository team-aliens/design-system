import { Text } from '../styleGuide/text/Text';

interface PropsType {
  disabled?: boolean;
  label?: string;
}

export const Label = ({ disabled, label }: PropsType) => {
  return (
    <Text
      display="inline"
      margin={['left', 14]}
      color={disabled ? 'gray3' : 'gray5'}
      size="bodyM"
    >
      {label}
    </Text>
  );
};
