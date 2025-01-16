import { useState } from 'react'
import './App.css'
import { potions } from './data/data'
import { Potion } from './types/Potion'
import Card from './components/Card'
import Slider from './components/Slider'
import RarityFilter from './components/RarityFilter'
import EffectFilter from './components/EffectFilter'
import CraftTimeButton from './components/CraftTimeButton'
import Modal from './components/Modal'

function App() {
  
  const [showingPotions, setShowingPotions] = useState<Potion[]>(potions);
  const [modalPotion, setModalPotion] = useState<Potion | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      {modalVisible ? <Modal potion={modalPotion} setModalVisible={setModalVisible}></Modal> : null}  
      <div className='w-[100%] min-h-screen flex flex-col justify-center items-center'>
        <div className='w-[90%] min-h-[720px] flex flex-wrap justify-center items-center'>
          {showingPotions.map(potion =>
            <Card potion={potion} setModalVisible={setModalVisible} setModalPotion={setModalPotion}></Card>
          )}
        </div>

        <div className='w-[70%] flex flex-row items-center justify-between mt-5'>
            <Slider setShowingPotions={setShowingPotions} potions={potions}></Slider>
            <RarityFilter setShowingPotions={setShowingPotions} potions={potions} showingPotions={showingPotions}></RarityFilter>
            <EffectFilter setShowingPotions={setShowingPotions} potions={potions}></EffectFilter>
            <CraftTimeButton showingPotions={showingPotions}></CraftTimeButton>
          </div>
      </div>
    </>
  )
}

export default App
