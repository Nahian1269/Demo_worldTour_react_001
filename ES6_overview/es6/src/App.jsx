import './App.css'
import Sunglass from './components/Sunglass/Sunglass'
import Watch from './components/Watch/Watch'


function App() {
//local use 
  const watches = [
    {id: 1 , name: 'Apple watch' , price: 200},
    {id: 2 , name: 'Samsung watch' , price: 200},
    {id: 3 , name: 'Xaomi watch' , price: 200}
  ] 

  return (
    <>
    <div>
    {
      watches.map(watch => <Watch key={watch.id} watch = {watch}></Watch> )
    }
    </div>
    
    </>
  )
}

export default App
