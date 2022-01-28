/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
interface Props {
  src?: string;
  alt?: string;
}
const ImageContainer: FC<Props> = ({ src, alt }) => {
  return (
    <div>
      <span>
        <img src={src} alt={alt} />
      </span>
    </div>
  );
};
export default ImageContainer;
