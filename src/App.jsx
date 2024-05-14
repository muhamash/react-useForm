import './App.css'
import LoginCard from './components/form/LoginCard'
import Registration from './components/form/Registration'

function App() {


  return (
    <div className="flex justify-center items-center gap-10 py-10">
      <LoginCard />
      <Registration/>
    </div>
  )
}

export default App
