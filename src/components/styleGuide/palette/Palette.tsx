import { color, colorKeyOfType } from '../../../styles/theme/color';
import styled from 'styled-components';
import { Text } from '../text/Text';

export const Palette = () => {
  return (
    <div>
      {Object.keys(color).map((colorKey: colorKeyOfType, idx) => (
        <_Template key={idx}>
          <_Color colorKey={colorKey} />
          <Text margin={['top', 6]}>{colorKey}</Text>
          <Text color="gray6" size="bodyS">
            {color[colorKey]}
          </Text>
        </_Template>
      ))}
    </div>
  );
};

const _Color = styled.div<{ colorKey: colorKeyOfType }>`
  background-color: ${({ theme, colorKey }) => theme.color[colorKey]};
  height: 130px;
  border-radius: 4px 4px 0 0;
`;

const _Template = styled.div`
  display: inline-block;
  width: 150px;
  height: 190px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.gray3};
  margin: 8px 10px;
`;
