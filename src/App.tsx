import { useState } from 'react'
import { Header } from "./components/Header"
import { Slides } from "./components/Slides"
import { Cards } from "./components/Cards"
import { propertiesData } from './DataBase'
import { SecBody } from './styledApp'

function App() {
  return (
    <>
      <main>
        <Header />
        <Slides />
          <SecBody>
            <ul className='UlCards'>
                {propertiesData.map((propertie, index) => {
                    return <Cards
                      key={index}
                      id={propertie.id}
                      image={propertie.image}
                      title={propertie.title}
                      area={propertie.area}
                      price={propertie.price}
                      level={propertie.level}  />
                })}
            </ul>
          </SecBody>
      </main>
    </>

  )
}

export default App
