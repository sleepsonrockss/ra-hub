import {useState} from 'react'

function RequestSwap(){ //Setter for a Button
  const [requested, setRequested] = useState(false)

  return(
    <button onClick={() => setRequested(true)}>
      {requested ? 'Swap Requested' : 'Swap'}
    </button>
  )
}


function ShiftItem({shift}) { // to display the Shifts in a format
  return(
    <li>{shift.building}: {shift.start} - {shift.end} <RequestSwap /></li>
  )
}

export default ShiftItem