import './App.css'

function App() {
  
  const shift_1 = {building:'Aspen', start:'Oct 2nd, 7:00 pm', end:'Oct 3rd, 12:00 am', id:'1'}
  const shift_2 = {building:'HUB', start:'Oct 3rd, 7:00 pm', end:'Oct 4th, 12:00 am', id:'2'}
  const shifts = [shift_1, shift_2]
  const shiftBuilding = shifts.map((s) => <li key={s.id}>{s.building}</li>)

  return (
    <>
    <p>
      {shifts[0].building}
    </p>
    <ul>{shiftBuilding}</ul>
    </>
)
}

export default App
