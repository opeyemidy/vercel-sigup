import React, { FC, CSSProperties } from 'react';
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
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="geometricPrecision"
          style={{ color: 'var(--primary)' }}
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
            stroke="currentColor"
          ></path>
          <path
            d="M8 11.8571L10.5 14.3572L15.8572 9"
            fill="none"
            stroke="#fff"
          ></path>
        </svg>
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
