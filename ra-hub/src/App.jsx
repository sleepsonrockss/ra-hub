import './App.css'
import ShiftItem from './components/ShiftItem'

function App() {
  
  const shift_1 = {id: 1, building:'Aspen', start:'Oct 2nd, 7:00 pm', end:'Oct 3rd, 12:00 am'}
  const shift_2 = {id: 2, building:'HUB', start:'Oct 3rd, 7:00 pm', end:'Oct 4th, 12:00 am'}
  const shifts = [shift_1, shift_2]
  const shiftBuilding = shifts.map((s) => <ShiftItem key = {s.id} shift={s}/>)

  return (
    <>
    <ul>{shiftBuilding}</ul>
    </>
)
}

export default App
