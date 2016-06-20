var React = require('react');
var ConfirmBattle = require('../components/confirmBattle')
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  contextType: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return({
      isLoading: true,
      playersInfo: []
    })
  },

  componentDidMount: function(){
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo]).then(function (players){
      this.setState({
        isLoading: false,
        playersInfo: [players[0],players[1]]
      })
    }.bind(this))
  },
  handleInitiateBattle: function(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },

  render: function(){
    console.log(this.state);
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}/>
    )
  }
});

module.exports = ConfirmBattleContainer;