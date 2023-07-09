import React from 'react'
import LandingPage from './LandingPages/LandingPage'
import CallToAction from './LandingPages/CallToAction'

function Home({user}) {
  return (
    <main>
     { !user ? <CallToAction/> : 
<LandingPage user={user}/>
}
    </main>
  )
}

export default Home