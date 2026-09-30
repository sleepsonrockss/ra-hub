import './App.css'
import ShiftItem from './components/ShiftItem'
import { shifts, users } from './data/sampleData.js'


function App() {
  const currentUserId = 4
  
  const currentUserShifts = shifts.filter((s) => s.raId === currentUserId)
  const shiftBuilding = currentUserShifts.map((s) => <ShiftItem key = {s.id} shift={s}/>)
  const currentUser = users.find((u) => u.id === currentUserId)

  

  return (
    <>
    <h1>RA Hub</h1>
    <h2>Welcome, {currentUser.name}</h2>
    {currentUserShifts.length > 0 ? <ul>{shiftBuilding}</ul> : <p>You have no shifts at the moment</p>}
    </>
)
}

export default App
