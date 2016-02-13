import React, { Component, PropTypes } from 'react';

class ReactPreloader extends Component {
  static propTypes = {
    children: PropTypes.element,
    onLoaded: PropTypes.func
  };

  render() {
    const { children } = this.props;

    // TODO: depends on 'children' show it or set class (show and hide when loaded)

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ReactPreloader;
