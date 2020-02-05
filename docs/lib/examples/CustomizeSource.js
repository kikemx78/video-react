import React from 'react';
import { Player } from 'video-react';

import HLSSource from './HLSSource';

class CustomizeSourceExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // Add customized HLSSource component into video-react Player
  // The Component with `isVideoChild` attribute will be added into `Video` component
  // Please use this url if you test it from local:
  // http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8

  render() {
    return (
      <Player hasBitRateControler>
        <HLSSource
          isVideoChild
          src="//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
        />
      </Player>
    );
  }
}

export default CustomizeSourceExample;
