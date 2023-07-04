import React from 'react'

function Home({user}) {
  return (
    <main>
     { !user && <div className="space-y-5">
  <div className="p-3 bg-white shadow rounded-lg font-bold text-2xl">
    <p className="text-center">
      Welcome to JW Show Scraper website
    </p>
  </div>
</div>}
    </main>
  )
}

export default Home