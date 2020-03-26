import React from "react";

import './index.scss';
import cloud from '@src/common/resources/cloud.png';


export class HelloWorld extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div className="_hello-world">
        <div className="container">
          <img className="logo" src={cloud} />
          <div className="text">
            <h1 className="title">欢迎使用 Cloud Flow</h1>
            <p className="description">修改 src/app.tsx 来编写你自己的应用</p>
          </div>
        </div>
      </div>
    );
  }
}