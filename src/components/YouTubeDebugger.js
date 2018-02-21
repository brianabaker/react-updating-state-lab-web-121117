// Code YouTubeDebugger Component Here

import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: "1080p" }
      }
    };
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings, 
        video: {
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button
          class="bitrate"
          onClick={this.handleBitrate}
          className="bitrate"
        >
          Bitrate
        </button>
        <button
          class="resolution"
          onClick={this.handleResolution}
          className="resolution"
        >
          Resoultion
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;

// js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
