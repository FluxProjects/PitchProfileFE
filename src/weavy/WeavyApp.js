import React, { Component } from "react";
import "./Weavy.css";
import WeavyContext from "./WeavyContext";

export default class WeavyApp extends Component {
  static contextType = WeavyContext;

  async createWeavyApp() {
    this.weavy.space = {
      key: this.props.spaceKey,
      name: this.props.spaceName,
    };
    this.weavySpace = this.weavy;
    console.log("this.context.weavy", this.weavy.space);

    this.weavyApp = this.weavySpace.app({
      key: this.props.appKey,
      type: this.props.appType,
      name: this.props.appName,
      container: this.el,
    });
  }

  componentDidMount() {
    console.log("this.props.spaceKey", this.props.spaceKey);
    this.weavy = this.context.weavy;
    this.createWeavyApp();
  }

  shouldComponentUpdate(nextProps) {
    // A key must change for the app to change
    var spaceChanged = nextProps.spaceKey !== this.props.spaceKey;
    var appChanged = nextProps.appKey !== this.props.appKey;
    return spaceChanged || appChanged;
  }

  componentDidUpdate(prevProps) {
    this.weavyApp.remove();
    this.createWeavyApp();
  }

  componentWillUnmount() {
    this.weavyApp.remove();
  }

  render() {
    return <div className="weavy-container" ref={(el) => (this.el = el)} />;
  }
}
