import { ReactElement } from 'react';
import { ButtonWrapper } from './styles';

interface Props {
  onClick?: any;
  content: ReactElement | string;
  shape?: string;
  size?: string;
  color?: string;
  animation?: string;
}

const CommonButton = ({
  onClick,
  content,
  shape,
  size,
  color,
  animation,
}: Props) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      size={size}
      shape={shape}
      color={color}
      animation={animation}
    >
      {content}
    </ButtonWrapper>
  );
};

export default CommonButton;
