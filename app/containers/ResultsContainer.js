var React = require('react')
var Results = require('../components/Results')
var githubHelpers = require('../utils/githubHelpers')

var ResultsContainer = React.createClass({
  getInitialState: function(){
    return {
    isLoading: true,
    scores: []
    }
  },

  componentDidMount: function(){
    console.log(this.props.location.playersInfo)
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },

  winner: function(){
    if (this.state.scores.length > 0){
      if (this.state.scores[0] > this.state.scores[1]){
        return this.props.location.state.playersInfo[0].login + " wins"
      } else if (this.state.scores[0] === this.state.scores[1]){
        return "Its a Tie"
      } else {
        return this.props.location.state.playersInfo[1].login + " wins"
      }
    } else {
      return null
    }
  },

  render: function(){
    return (
        <Results
          isLoading={this.state.isLoading}
          scores={this.state.scores}
          playersInfo={this.props.location.state.playersInfo}
          winner={this.winner()}/>
    );
  }
})

module.exports = ResultsContainer;