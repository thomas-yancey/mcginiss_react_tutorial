var React = require('react');
var PropTypes = React.PropTypes;
var Router = require('react-router')
var Link = Router.Link
var styles = require('../styles')
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var Loading = require('./Loading')

function puke (object){
  return <pre>{JSON.stringify(object,null,' ')}</pre>
}

function ConfirmBattle(props){
  return props.isLoading === true
    ? <Loading/>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        {props.playersInfo.map(function(playerInfo,idx){
          return (
              <UserDetailsWrapper header={'Player ' + (idx + 1).toString()}>
                <UserDetails playerInfo={playerInfo}/>
              </UserDetailsWrapper>
            )
        })}
        <div className='col-sm-8 col-sm-offset-2'>
          <div className="col-sm-12" style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              Initiate battle!
            </button>
        </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
