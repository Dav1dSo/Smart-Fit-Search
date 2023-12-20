import './App.css'
import Nav from './components/Nav/Nav'
import FormFilter from './components/FormFilter/FormFilter'
import Legend from './components/Legend/Legend'
import Header from './components/Header/Header'
import CardUnit from './components/CardUnits/CardUnits'
import { useState } from 'react'

function App() {

  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleUnitClick = (unitData) => {
    setSelectedUnit(unitData); 
  };

  return (
      <div>
        <Nav/>
          <Header/>
            <FormFilter onUnitClick={handleUnitClick}/>
              <Legend/>
              {selectedUnit && <CardUnit Unit={selectedUnit} />}
      </div>  
  )
}

export default App
