import {useState} from 'react'

function RequestSwap(){
  const [requested, setRequested] = useState(false)

  return(
    <button onClick={() => setRequested(true)}>
      {requested ? 'Swap Requested' : 'Swap'}
    </button>
  )
}


function ShiftItem({shift}) {
  return(
    <li>{shift.building}: {shift.start} - {shift.end} <RequestSwap /></li>
  )
}

export default ShiftItem