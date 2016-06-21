var React = require('react');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var styles = require('../styles')
var Router = require('react-router')
var Link = Router.Link
var Loading = require('./Loading')

function puke(obj){
  return<pre>{JSON.stringify(obj,2,' ')}</pre>
}

function Results(props) {
  return props.isLoading === true ?
    <Loading/> :
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>{props.winner}</h1>
    {props.playersInfo.map(function(playerInfo, idx){
      return (
      <UserDetailsWrapper header={'Player ' + (idx + 1).toString()}>
        <UserDetails
          playerInfo={playerInfo}
          score={props.scores[idx]}/>
      </UserDetailsWrapper>
      )
    })}
    <div className="col-sm-12" style={styles.space}>
      <Link to='/'>
        <button type='button' className='btn btn-lg btn-danger'>
          Start Over
        </button>
      </Link>
      </div>
    </div>
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results