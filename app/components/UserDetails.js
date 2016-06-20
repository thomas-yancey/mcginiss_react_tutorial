var React = require('react')

function UserDetails(user){
  debugger
  return(
    <div>
        {user.score && <p>{user.score}</p>}
        {user.playerInfo.name && <p>name: {user.playerInfo.name}</p>}
        <img src={user.playerInfo.avatar_url}/>
        <p>followers: {user.playerInfo.followers}</p>
        <p>following: {user.playerInfo.following}</p>
    </div>
  )
}

module.exports = UserDetails;