import React from 'react';

import './mac.css';

export interface MacProps {
  title: string;
  children?: React.ReactNode;
}

export default function MacWindow({title, children}: MacProps): JSX.Element {
  return (
    <div className="window">
      <div className="menubar">
        <div className="buttons">
          <div className="close">
            <button type="button" className="closebutton"><span><strong>x</strong></span></button>
          </div>
          <div className="minimize">
            <button type="button" className="minimizebutton"><span><strong>&ndash;</strong></span></button>
          </div>
          <div className="zoom">
            <button type="button" className="zoombutton"><span><strong>+</strong></span></button>
          </div>
        </div>
      </div>
      <div className="titlebar">
        {title}
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}
