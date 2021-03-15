import React from "react";
import { connect } from "react-redux";

import Head from "./Head";
import ContainerList from "../containers/ContainerList";
import ContainerPreview from "../containers/ContainerPreview";
import ContainerLayer from "../containers/ContainerLayer";
import ContainerEdit from "../containers/ContainerEdit";
import "../../node_modules/github-markdown-css/github-markdown.css";
import "./App.css";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoteDetail: false,
      isFullScreen: false
    };
    this.changeStatusShow = this.changeStatusShow.bind(this);
    this.changeFullScreen = this.changeFullScreen.bind(this);
  }

  changeStatusShow(status) {
    this.setState({
      showNoteDetail: status
    });
  }

  changeFullScreen(status) {
    this.setState({
      isFullScreen: status
    });
  }

  render() {
    const layer = this.props.isShowLayer ? <ContainerLayer /> : "";
    const editer = this.props.isShowEditer ? <ContainerEdit /> : "";
    return (
      <div className="App">
        <Head />
        <main className={this.state.isFullScreen ? "notop" : "hastop"}>
          <ContainerList
            showNoteDetail={this.state.showNoteDetail}
            changeStatusShow={this.changeStatusShow}
          />
          <ContainerPreview
            showNoteDetail={this.state.showNoteDetail}
            changeStatusShow={this.changeStatusShow}
            changeFullScreen={this.changeFullScreen}
            isFullScreen={this.state.isFullScreen}
          />
        </main>
        {layer}
        {editer}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isShowLayer: state.isShowLayer,
  isShowEditer: state.isShowEditer
});

const App = connect(mapStateToProps)(Root);

export default App;
