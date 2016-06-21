var React = require('react');

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
};

var Loading = React.createClass({
  getInitialState: function(){
    return{
      text: "Loading"
    }
  },

  componentDidMount: function(){
    var stopper = "Loading...";
    this.interval = setInterval(function(){
      if (this.state.text === stopper){
        this.setState({
          text: "Loading"
        })
      } else { this.setState({
          text: this.state.text + "."
        })
      };
    }.bind(this),100)
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  render: function(){
    return(
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
})

module.exports = Loading