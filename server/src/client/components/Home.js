import React from 'react'

const Home = () => {
  const onclick=(e) =>{
    let sum = 0;
    sum += 1;
    console.log("You have clicked the button " + sum + "time")
  }
  return (
    <div>
    <div>Welcome to the Homepage</div>
    <button onClick={onclick} > Click This button</button>
    </div>
  )
}

export default Home