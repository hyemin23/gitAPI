import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  width: string | undefined;
  color: string | undefined;
}

const Container = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* default */
  width: 100%;
  /* custom */
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: white;
  height: 48px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  color?: string;
  children?: React.ReactNode;
  icon?: JSX.Element;
}
const Button: React.FC<IProps> = ({ children, color, width, icon, ...props }) => {
  return (
    <Container {...props} color={color} width={width}>
      {icon}
      {children}
    </Container>
  );
};

export default React.memo(Button);
