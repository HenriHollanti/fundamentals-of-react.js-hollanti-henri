import { useState } from 'react'

function NameForm() {
  const [name, setName] = useState()

  return (
    <>
    <div>
        <input onChange={(event) => setName(event.target.value)}></input>
    </div>
    <div>
        <button onClick={() => {
            alert(name);
        }}></button>
    </div>
    </>
  )
}

export default NameForm;