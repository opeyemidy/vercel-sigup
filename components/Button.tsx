import React, { FC, CSSProperties } from 'react';
export interface MyCustomCSS extends CSSProperties {
  '--button-custom-bg'?: string;
  '--button-custom-color'?: string;
  '--button-custom-border'?: string;
}

interface Props {
  color?: string;
  hoverColor?: string;
}
const Button: FC<Props> = ({ children, color, hoverColor }) => {
  return (
    <span className="button-wrapper">
      <button
        type="submit"
        className="custom-button"
        style={
          {
            '--button-custom-bg': color,
            '--button-custom-border': color,
            '--button-custom-hover-bg': hoverColor,
            '--button-custom-hover-border': hoverColor,
          } as MyCustomCSS
        }
      >
        {children}
      </button>
    </span>
  );
};
export default Button;
