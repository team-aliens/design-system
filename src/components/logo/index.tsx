import { marginCssType, _Wrapper } from '../../utils/distance';
import { Horizontal } from './Horizontal';
import { Vertical } from './Vertical';

interface PropsType extends marginCssType {
  type: 'horizontal' | 'vertical';
  width?: number;
  height?: number;
}

export const Logo = ({ type, margin, width, height }: PropsType) => {
  const logoDirection = () => {
    switch (type) {
      case 'horizontal':
        return <Horizontal width={width} height={height} />;
      case 'vertical':
        return <Vertical width={width} height={height} />;
    }
  };
  return <_Wrapper margin={margin}>{logoDirection()}</_Wrapper>;
};
