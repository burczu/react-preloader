import React, { Component, PropTypes } from 'react';

class ReactPreloader extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onLoaded: PropTypes.func
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ReactPreloader;
