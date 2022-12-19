import { Text } from '../styleGuide/text/Text';

export interface labelPropsType {
  label: string;
}

export const Label = ({ label }: labelPropsType) => {
  return (
    <Text margin={['left', 6]} size="bodyM" color="gray6">
      {label}
    </Text>
  );
};
