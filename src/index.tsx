import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

// 根组件
import { App } from '@src/app';

// 全局样式
import '@src/common/styles/base.scss';


const container: HTMLElement = document.getElementById('app');
let Root: React.ComponentType = App;

// 开发环境下启用 React Hot Loader
if (process.env.NODE_ENV === 'development') {
  Root = hot(module)(App);
}


window.onload = function() {
  ReactDOM.render(<Root />, container);
};
