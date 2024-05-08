import { useState, useEffect } from "react"
const EjemploContador = () => {
  const [contador, setContador ] = useState(0)
  const [switchButton, setSwitchButton] =useState(true)
  const cambiarToggle = () =>{

    setSwitchButton(!switchButton)
  }


  // console.log("se monto o se actualizao el componente")

  //let contador = 0;

  const aumentar = () =>{
    setContador(contador + 1 )
  }
  useEffect (()=> {
    const fetchApi = () => {

    fetch ("https://fakestoreapi.com/products")
              .then(res=>res.json())
              .then((data) =>console.log(data))
  }

  fetchApi()
  }, [])
//se ejecuta al montar el componente
//ej: llamada a api, suscriptciones a eventListener
  useEffect(() => {
    console.log("1er useEffect")
  }, [])

//se ejecuta en el montaje y cada vez que contador se actualice
//ej:para realizar acciones especficicas cuando una variable cambie
  useEffect(()=>{
    console.log("2do useEffect")
  },[contador])

  //se ejectuta en el montaje y cada vez que se actualice cualquier estadado de mi componente
//ej: operaciones globales de monitoreo, actualiazazciones generales del componente
  useEffect (()=>{
  console.log("3er useEffect")
})

  return (
    <div>
      <p>contador: {contador}</p>
      <button onClick={aumentar}>+</button>
      <p>valor del toggle:{switchButton.toString()}</p>
      <button onClick = {cambiarToggle}>cambiar toggle</button>
    </div>
  )
}

export default EjemploContador