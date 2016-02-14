import React from 'react';

const { PropTypes } = React;

class ReactPreloader extends React.Component {
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
