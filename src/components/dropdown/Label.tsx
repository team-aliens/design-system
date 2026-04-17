import { Text } from '../styleGuide/text/Text';

interface PropsType {
  className?: string;
  label: string;
}

export const Label = ({ label, className }: PropsType) => {
  return (
    <Text className={className} size="bodyM" color="gray6">
      {label}
    </Text>
  );
};
