import './App.css'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import FormFilter from './components/FormFilter/FormFilter'
import Legend from './components/Legend/Legend'

function App() {

  return (
      <div>
        <Header/>
          <Title/>
            <FormFilter/>
              <Legend/>
      </div>  
  )
}

export default App
