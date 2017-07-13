class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0]
    };
  }

  onListClick(videoObj) {
    this.setState({
      currentVideo: videoObj
    });
    console.log('clicked');
    console.log('video obj', videoObj);
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList click={this.onListClick.bind(this)} videos={exampleVideoData} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
