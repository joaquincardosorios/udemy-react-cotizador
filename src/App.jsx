import { useState } from 'react'
import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  const [ cantidad, setCantidad ] = useState(2000000);

  const MIN = 0;
  const MAX = 4000000;
  const STEP = 10000

  function handleChange(e) {
    setCantidad(+e.target.value)
  }

  function handleClickDecremento(){
    if(cantidad <= MIN){
      alert('Cantidad no válida');
      return;
    }
    const valor = cantidad - STEP;
    setCantidad(valor)
  }

  function handleClickIncremento(){
    if(cantidad >= MAX){
      alert('Cantidad no válida');
      return;
    }
    const valor = cantidad + STEP;
    setCantidad(valor)
  }

  return ( 
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className='flex justify-between my-6'>
        <Button 
          operador='-'
          fn= {handleClickDecremento}
        />
        <Button
          operador='+'
          fn= {handleClickIncremento}
        />
      </div>

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange }
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>${cantidad.toLocaleString('es-CL')}</p>
    </div>
  );
}
 
export default App;