import React, { CSSProperties } from 'react';
import Logo from '../assets/icons/Logo';
import Button from '../components/Button';
import Github from '../assets/icons/Github';
import Gitlab from '../assets/icons/Gitlab';
import Bitbucket from '../assets/icons/Bitbucket';
import LinkIcon from '../assets/icons/LinkIcon';
export interface MyCustomCSS extends CSSProperties {
  '--justify-content'?: string;
  '--flex'?: string;
  '--button-custom-border'?: string;
  '--content-length'?: string;
  'align-items'?: string;
}
export default function ContentRight() {
  return (
    <div
      className="content"
      style={
        {
          '--flex': '1',
          '--justify-content': 'flex-start',
          '--align-items': 'stretch',
        } as MyCustomCSS
      }
    >
      <div className="signup-right">
        <div className="sm-logo">
          <span className="spacer" style={{ marginTop: 35 }}></span>
          <Logo />
          <span className="spacer" style={{ marginTop: 47 }}></span>
        </div>
        <h1 className="signup-title">
          Join the best <br /> frontend teams
        </h1>
        <span className="spacer" style={{ marginTop: 47 }}></span>
        <span className="spacer spacer-sm" style={{ marginTop: -25 }}></span>
        <div>
          <Button>
            <span style={{ marginRight: 8 }}>
              <Github />
            </span>
            <span>Continue with Github</span>
          </Button>
          <span className="spacer" style={{ marginTop: 11 }}></span>
          <Button color="#6b4fbb" hoverColor="#8367D3">
            <span style={{ marginRight: 8 }}>
              <Gitlab />
            </span>
            <span>Continue with GitLab</span>
          </Button>
          <span className="spacer" style={{ marginTop: 11 }}></span>
          <Button color="#0052CC" hoverColor="#1668E2">
            <span style={{ marginRight: 8 }}>
              <Bitbucket />
            </span>
            <span>Continue with Bitbucket</span>
          </Button>
          <span className="spacer" style={{ marginTop: 23 }}></span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span className="link">Continue with Email →</span>
        </div>
        <span className="spacer" style={{ marginTop: 47 }}></span>
        <p style={{ maxWidth: '35ch' }}>
          By clicking continue, you agree to our
          <br />
          <a
            href="https://vercel.com/legal/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            <span className="link-text">Terms of Service </span>
            <LinkIcon />
          </a>{' '}
          and{' '}
          <a
            href="https://vercel.com/legal/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            <span className="link-text">Privacy Policy </span>
            <LinkIcon />.
          </a>
        </p>
        <div
          className="content"
          style={
            {
              '--justify-content': 'flex-start',
              '--align-items': 'stretch',
              '--flex': '0 0 auto',
            } as MyCustomCSS
          }
        >
          <span className="spacer" style={{ marginTop: 47 }}></span>
          <p className="link-text">
            Have a complex company use case?
            <br />
            <a href="" className="link">
              Get enterprise-grade assistance
            </a>
          </p>
          <span className="spacer"></span>
          <hr />
          <span className="spacer"></span>
          <p className="link-text">
            Already have an account?
            <a href="https://vercel.com/login" className="link">
              {' '}
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
