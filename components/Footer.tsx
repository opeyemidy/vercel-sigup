import React, { useState, FC } from 'react';
import { useTheme } from 'next-themes';
import lists from '../data/footer-links';
import FooterGroup from './FooterGroup';
import Logo from '../assets/icons/Logo';
import Github from '../assets/icons/GithubFooter';
import Twitter from '../assets/icons/Twitter';
import Light from '../assets/icons/Light';
import Dark from '../assets/icons/Dark';
import System from '../assets/icons/System';
import Select from '../assets/icons/Select';
interface Props {
  mode?: string;
}
const ThemeModeIcon: FC<Props> = ({ mode }) =>
  mode === 'light' ? <Light /> : mode === 'dark' ? <Dark /> : <System />;

export default function Footer() {
  const [modes, setModes] = useState(['light', 'dark', 'system']);
  const { theme, setTheme } = useTheme();
  return (
    <footer className="footer">
      <nav>
        {lists.map(({ title, items }, i) => (
          <FooterGroup key={i} title={title} items={items} />
        ))}
      </nav>
      <section>
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-wrapper">
          <span className="footer-copyright">
            Copyright © {new Date().getFullYear()} Vercel Inc. All rights
            reserved.
          </span>
          <span className="footer-contact">
            <ul className="footer-social">
              <li>
                <a href="#" className="footer-github">
                  <Github />
                </a>
              </li>
              <li>
                <a href="#">
                  <Twitter />
                </a>
              </li>
            </ul>
          </span>
          <div className="status-indicator">
            <a href="/" target="_blank">
              <span>Status:</span>
              <span className="status-indicator-icon"></span>
              <span className="status-reserve">All systems normal.</span>
            </a>
          </div>
          <div className="footer-theme-switcher">
            <label htmlFor="theme-switcher">
              <div className="select-container">
                <span className="select-prefix">
                  <ThemeModeIcon mode={theme} />
                </span>
                <select
                  className="select-select"
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                  value={theme}
                >
                  {modes.map((mode, index) => (
                    <option key={index} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
                <span className="select-suffix">
                  <Select />
                </span>
              </div>
            </label>
          </div>
        </div>
      </section>
    </footer>
  );
}
