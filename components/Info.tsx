import React, { FC, CSSProperties } from 'react';
import Badge from '../assets/icons/Badge';
export interface MyCustomCSS extends CSSProperties {
  '--justify-content'?: string;
  '--flex'?: string;
  '--button-custom-border'?: string;
  '--content-length'?: string;
}

interface Props {
  title?: string;
  body?: string;
  length?: number;
}
const Info: FC<Props> = ({ title, body, length }) => {
  return (
    <div className="info-container">
      <div>
        <span className="spacer space-top-small"></span>
        <Badge />
      </div>
      <div
        className="content"
        style={
          {
            '--flex': '0 0 auto',
            '--justify-content': 'flex-start',
            '--align-items': 'stretch',
            marginLeft: 12,
          } as MyCustomCSS
        }
      >
        <h3 className="info-title">{title}</h3>
        <p
          className="info-body"
          style={
            length
              ? ({ '--content-length': length + 'ch' } as MyCustomCSS)
              : undefined
          }
        >
          {body}
        </p>
      </div>
    </div>
  );
};
export default Info;
