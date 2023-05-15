
import { Header } from "./components/Header"
import { Slides } from "./components/Slides"
import { Cards } from "./components/Cards"

import { propertiesData } from './DataBase'
import { SecBody } from './styledApp'
import { WhatsApp } from "./components/WhatsApp"
import { Footer } from "./components/Footer"

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
                    brique={propertie.brique}
                    tipo={propertie.tipo}
                    capa={propertie.capa}
                    image={propertie.image}
                    title={propertie.title}
                    area={propertie.area}
                    price={propertie.price}
                    level={propertie.level}
                    description={propertie.description}  />
              })}
          </ul>
        </SecBody>
        <Footer />
        <WhatsApp />
      </main>
    </>

  )
}

export default App
