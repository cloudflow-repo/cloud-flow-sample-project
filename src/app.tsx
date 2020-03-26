import React from "react";
import { HelloWorld } from "@src/components/hello-world";

interface AppProps {
  // App 启动参数
}

interface AppState {
  // App 内部状态
}

export class App extends React.PureComponent<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <HelloWorld />
    );
  }
}