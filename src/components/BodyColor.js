import React from "react";
import PropTypes from "prop-types";

class BodyColor extends React.Component {
  static propTypes = {
    isBizCardGradient: React.PropTypes.bool
  };

  static defaultProps = {
    isBizCardGradient: false
  };

  componentDidMount() {
    document.body.classList.toggle("bizCard-bg", this.props.isBizCardGradient);
  }

  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle("bizCard-bg", nextProps.isBizCardGradient);
  }

  componentWillUnmount() {
    document.body.classList.remove("bizCard-bg");
  }

  render() {
    return this.props.children;
  }
}
