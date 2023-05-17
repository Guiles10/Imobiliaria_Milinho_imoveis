
import { Header } from "./components/Header"
import { Slides } from "./components/Slides"
import { Cards } from "./components/Cards"

import { propertiesData } from './DataBase'
import { SecBody } from './styledApp'
import { WhatsApp } from "./components/WhatsApp"
import { Footer } from "./components/Footer"
import { useState } from "react"
import { ModalVenda } from "./components/ModalVenda"
import { Contato } from "./components/Contato"

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('Todos')

  return (
    <>
      <main>
        <Header setModalOpen={setModalOpen} setFilter={setFilter}/>
        <Slides />
        <Contato />
        <SecBody>
          {modalOpen ? <ModalVenda setModalOpen={setModalOpen}/> : null }

          <ul className='UlCards'>
              {propertiesData.map((propertie, index) => {
                if (filter === 'Todos' || propertie.brique == filter){
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
                }})}
          </ul>

        </SecBody>
        <Footer />
        <WhatsApp />
      </main>
    </>

  )
}

export default App
