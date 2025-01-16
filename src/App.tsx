import { useState } from 'react'
import './App.css'
import { potions } from './data/data'
import { Potion } from './types/Potion'
import Card from './components/Card'
import Slider from './components/Slider'
import RarityFilter from './components/RarityFilter'
import EffectFilter from './components/EffectFilter'
import CraftTimeButton from './components/CraftTimeButton'

function App() {
  
  const [showingPotions, setShowingPotions] = useState<Potion[]>(potions);

  return (
    <>
      <div className='w-[100%] min-h-screen flex justify-center '>
        <div className='w-[98%] flex flex-wrap justify-center items-center'>
          {showingPotions.map(potion =>
            <Card potion={potion}></Card>
          )}
          <div className='w-[60%] flex flex-row items-center justify-between'>
            <Slider setShowingPotions={setShowingPotions} potions={potions}></Slider>
            <RarityFilter setShowingPotions={setShowingPotions} potions={potions} showingPotions={showingPotions}></RarityFilter>
            <EffectFilter setShowingPotions={setShowingPotions} potions={potions}></EffectFilter>
            <CraftTimeButton showingPotions={showingPotions}></CraftTimeButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
