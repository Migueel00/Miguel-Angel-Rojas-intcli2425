import { useState } from 'react'

import './App.css'
import { potions } from './data/data'
import { Potion } from './types/Potion'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const [showingPotions, setShowingPotions] = useState<Potion[]>(potions);

  return (
    <>
      <div className='w-[100%] min-h-screen flex justify-center '>
        <div className='w-[98%] flex flex-wrap justify-center items-center'>
          { showingPotions.map(potion =>  
            <Card potion={potion}></Card>
          )}
        </div>
      </div>
    </>
  )
}

export default App
