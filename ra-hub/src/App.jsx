import './App.css'
import ShiftItem from './components/ShiftItem'
import { shifts } from './data/sampleData.js'


function App() {
  const currentUserId = 3
  
  const currentUserShifts = shifts.filter((s) => s.raId === currentUserId)
  const shiftBuilding = currentUserShifts.map((s) => <ShiftItem key = {s.id} shift={s}/>)

  return (
    <>
    {currentUserShifts.length > 0 ? <ul>{shiftBuilding}</ul> : <p>You have no shifts at the moment</p>}
    </>
)
}

export default App
