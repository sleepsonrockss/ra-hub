import './App.css'
import ShiftItem from './components/ShiftItem.jsx'
import Deadline from './components/DeadlineItem.jsx'
import { shifts, users, deadlines } from './data/sampleData.js'


function App() {
  const currentUserId = 4
  
  const currentUserShifts = shifts.filter((s) => s.raId === currentUserId) // all the shifts that have the same RA associated to the User Id
  const shiftBuilding = currentUserShifts.map((s) => <ShiftItem key = {s.id} shift={s}/>) // to display the User's shifts, run each shift thorught the ShiftItem function
  const currentUser = users.find((u) => u.id === currentUserId)

  if (!currentUser) {
    return(<p>User Not Found</p>)
  }

  

  return (
    <>
    <h1>RA Hub</h1>
    <h2>Welcome, {currentUser.name}</h2>
    {currentUserShifts.length > 0 ? <ul>{shiftBuilding}</ul> : <p>You have no shifts at the moment</p>}
    <h1>Upcoming Deadlines</h1>
    {}
    </>
    
)
}

export default App
