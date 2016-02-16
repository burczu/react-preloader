import React from 'react';
import classNames from 'classnames';

const { PropTypes } = React;

class ReactPreloader extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.element,
    loaderSrc: PropTypes.string,
    onLoaded: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    // TODO: change it to the real implementation of hiding when images loaded
    window.setTimeout(this.hidePreloader.bind(this), 2000); //eslint-disable-line no-undef
  }

  hidePreloader() {
    const { onLoaded } = this.props;
    this.setState({ visible: true });

    if (onLoaded && typeof onLoaded === 'function') {
      onLoaded();
    }
  }

  render() {
    const { children } = this.props;
    const preloaderClassNames = classNames({
      'visible': this.state.visible
    });

    // TODO: depending on 'children' show it or set class (show and hide when loaded)

    return (
      <div className={preloaderClassNames}>
        {children}
      </div>
    );
  }
}

export default ReactPreloader;
