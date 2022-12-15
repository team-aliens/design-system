import { Text } from '../styleGuide/text/Text';

interface PropsType {
  label: string;
}

export const Label = ({ label }: PropsType) => {
  return (
    <Text size="bodyM" color="gray6">
      {label}
    </Text>
  );
};
