import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import FooterGroup from './FooterGroup';
export default function Footer() {
  const [lists, setLists] = useState([
    {
      title: 'Frameworks',
      items: [
        {
          label: 'Next.js',
          link: '/',
        },
        {
          label: 'Create React App',
          link: '/',
        },
        {
          label: 'Gatsby',
          link: '/',
        },
        {
          label: 'Nuxt.js',
          link: '/',
        },
        {
          label: 'Vue',
          link: '/',
        },
        {
          label: 'Angular',
          link: '/',
        },
        {
          label: 'More Frameworks',
          link: '/',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          label: 'Documentation',
          link: '/',
        },
        {
          label: 'Experts',
          link: '/',
        },
        {
          label: 'Customers',
          link: '/',
        },
        {
          label: 'Guides',
          link: '/',
        },
        {
          label: 'Supports',
          link: '/',
        },
        {
          label: 'API Reference',
          link: '/',
        },
        {
          label: 'OSS',
          link: '/',
        },
        {
          label: 'Command-Line',
          link: '/',
        },
        {
          label: 'Integrations',
          link: '/',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Blog',
          link: '/',
        },
        {
          label: 'Changelog',
          link: '/',
        },
        {
          label: 'About',
          link: '/',
        },
        {
          label: 'Careers',
          link: '/',
        },
        {
          label: 'Pricing',
          link: '/',
        },
        {
          label: 'Security',
          link: '/',
        },
        {
          label: 'Next.js Conf',
          link: '/',
        },
        {
          label: 'Partners',
          link: '/',
        },
        {
          label: 'Contact Us',
          link: '/',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          label: 'Privacy Policy',
          link: '/',
        },
        {
          label: 'Terms of Service',
          link: '/',
        },
        {
          label: 'Trademark Policy',
          link: '/',
        },
        {
          label: 'Inactivity Policy',
          link: '/',
        },
        {
          label: 'DMCA Policy',
          link: '/',
        },
        {
          label: 'DPA',
          link: '/',
        },
        {
          label: 'OSS',
          link: '/',
        },
        {
          label: 'SLA',
          link: '/',
        },
      ],
    },
  ]);
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
          <svg
            role="img"
            aria-label="Vercel Inc."
            height="20"
            viewBox="0 0 283 64"
            fill="var(--text-color-main)"
          >
            <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path>
          </svg>
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
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 14 14"
                    aria-label="github"
                  >
                    <path
                      d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    height="16"
                    viewBox="0 0 18 15"
                    aria-label="twitter"
                    fill="currentColor"
                  >
                    <path
                      d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z"
                      fillRule="nonzero"
                    ></path>
                  </svg>
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
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                    style={{ color: 'currentcolor' }}
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
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
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                    style={{ color: 'currentcolor' }}
                  >
                    <path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517"></path>
                  </svg>
                </span>
              </div>
            </label>
          </div>
        </div>
      </section>
    </footer>
  );
}
