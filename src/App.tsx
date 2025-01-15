import { useState } from 'react'
import './App.css'
import { potions } from './data/data'
import { Potion } from './types/Potion'
import Card from './components/Card'
import Slider from './components/Slider'
import RarityFilter from './components/RarityFilter'

function App() {
  
  const [showingPotions, setShowingPotions] = useState<Potion[]>(potions);

  return (
    <>
      <div className='w-[100%] min-h-screen flex justify-center '>
        <div className='w-[98%] flex flex-wrap justify-center items-center'>
          {showingPotions.map(potion =>
            <Card potion={potion}></Card>
          )}
          <div className='w-[40%] flex flex-row'>
            <Slider setShowingPotions={setShowingPotions} potions={potions}></Slider>
            <RarityFilter setShowingPotions={setShowingPotions} potions={potions} showingPotions={showingPotions}></RarityFilter>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
