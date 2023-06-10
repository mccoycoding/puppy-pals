import { useState } from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find(pup => pup.id === featPupId);
  console.log(featuredPup)

  console.log(puppies);
  return (
    <div className="App">
      {puppies.map(puppy => {
        return <p className="puppy-listing" onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      })}
      {featPupId && (
        <div className='puppy-details'>
          <h2>{featuredPup.name}</h2>
          <div>
            <p className='details'>Age: {featuredPup.age}</p>
            <p className='details'>Email: {featuredPup.email}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
