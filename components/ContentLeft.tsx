import React, { CSSProperties } from 'react';
import Logo from '../assets/icons/Logo';
import Info from '../components/Info';
import contents from '../data/contents';
import ImageContainer from './ImageContainer';
import images from '../data/images';
import ImageSlider from './ImageSlider';
export interface MyCustomCSS extends CSSProperties {
  '--justify-content'?: string;
  '--flex'?: string;
  '--button-custom-border'?: string;
  '--content-length'?: string;
  'align-items'?: string;
}
export default function ContentLeft() {
  return (
    <div
      className="content"
      style={
        {
          '--align-items': 'flex-start',
          '--justify-content': 'flex-start',
          '--flex': '0 0 auto',
        } as MyCustomCSS
      }
    >
      <span className="spacer vertical-space"></span>
      <div className="logo-lg">
        <Logo />
      </div>
      <span className="spacer vertical-space "></span>
      <div className="content features">
        <div
          className="content"
          style={
            {
              '--align-items': 'stretch',
              '--justify-content': 'flex-start',
              '--flex': '0 0 auto',
            } as MyCustomCSS
          }
        >
          {contents.map((content, i) => (
            <Info
              key={i}
              title={content.title}
              body={content.body}
              length={content.length}
            />
          ))}
        </div>
        <span className="spacer"></span>
        <div
          className="content content-bottom"
          style={
            {
              '--justify-content': 'flex-start',
              '--align-items': 'stretch',
              '--flex': '1',
            } as MyCustomCSS
          }
        >
          <div className="head">Proudly Serving Amazing Companies</div>
          <span className="spacer" style={{ marginTop: 11 }}></span>
          <div className="content feature-img-1">
            {images.slice(0, 4).map((image, i) => (
              <ImageContainer src={image.path} key={i} alt={image.alt} />
            ))}
          </div>
          <div
            className="content feature-img-1 img-resize"
            style={{ marginTop: 24 }}
          >
            {images.slice(4, 8).map((image, i) => (
              <ImageContainer src={image.path} key={i} alt={image.alt} />
            ))}
          </div>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
