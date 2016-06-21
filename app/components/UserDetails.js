var React = require('react')

function UserDetails(user){
  return(
    <div>
        {user.score && <p>score: {user.score}</p>}
        {user.playerInfo.name && <p>name: {user.playerInfo.name}</p>}
        <img src={user.playerInfo.avatar_url}/>
        <p>followers: {user.playerInfo.followers}</p>
        <p>following: {user.playerInfo.following}</p>
    </div>
  )
}

module.exports = UserDetails;