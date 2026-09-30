import './App.css'
import ShiftItem from './components/ShiftItem'


function App() {
  const currentUserId = 3
  
  const shift_1 = {id: 1, raId : 1, building:'Aspen', start:'Oct 2nd, 7:00 pm', end:'Oct 3rd, 12:00 am'}
  const shift_2 = {id: 2, raId : 1, building:'HUB', start:'Oct 3rd, 7:00 pm', end:'Oct 4th, 12:00 am'}
  const shift_3 = {id: 3, raId : 2, building:'I-House', start:'Oct 4th, 7:00 pm', end:'Oct 5th, 12:00 am'}
  const shifts = [shift_1, shift_2, shift_3]
  const currentUserShifts = shifts.filter((s) => s.raId === currentUserId)
  const shiftBuilding = currentUserShifts.map((s) => <ShiftItem key = {s.id} shift={s}/>)

  return (
    <>
    {currentUserShifts.length > 0 ? <ul>{shiftBuilding}</ul> : <p>You have no shifts at the moment</p>}
    </>
)
}

export default App
