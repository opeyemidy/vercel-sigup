import React, { FC, useState } from 'react';
interface Props {
  title?: string;
  items: object[];
}

const FooterGroup: FC<Props> = ({ title, items }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="footer-group">
        <input
          type="checkbox"
          checked={checked}
          className="visibility-hidden"
        />
        <label htmlFor="footer-group-2">
          <h3 onClick={() => setChecked(!checked)}>{title}</h3>
        </label>
        <ul className="footer-list">
          {items.map((item: any, i) => (
            <li className="footer-item" key={i}>
              <a href={item.link} className="link link-secondary">
                {item.label} {item.icon ? item.icon : ''}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default FooterGroup;
