import { useState } from "react"
const EjemploContador = () => {
  const [contador, setContador ] = useState(0)

  //let contador = 0;

  const aumentar = () =>{
    setContador(contador + 1 )
  }

  return (
    <div>
      <p>contador: {contador}</p>
      <button onClick={aumentar}>+</button>
    </div>
  )
}

export default EjemploContador