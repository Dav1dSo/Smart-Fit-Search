import './App.css'
import Nav from './components/Nav/Nav'
import FormFilter from './components/FormFilter/FormFilter'
import Legend from './components/Legend/Legend'
import Header from './components/Header/Header'

function App() {

  return (
      <div>
        <Nav/>
          <Header/>
            <FormFilter/>
              <Legend/>
      </div>  
  )
}

export default App
