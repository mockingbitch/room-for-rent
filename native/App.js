import React, { useState } from 'react'
import Navigator from './src/navigators/Navigator'

const App = () => {
  const [posibleFriends, setPosibleFriends] = useState([
    'John', 'Arthur', 'Thomas',
  ]);
  const [currentFriend, setCurrentFriend] = useState([]);

  const addFriend = (index) => {
    const addedFriend = posibleFriends.splice(index, 1)
    setCurrentFriend(addedFriend)
  }

  return (
    <Navigator
      screenProps={{
        currentFriends: currentFriend,
        possibleFriends: posibleFriends,
        addFriend: addFriend,
      }}
    />
  )
}

export default App