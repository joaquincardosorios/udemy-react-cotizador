import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Button from "./components/Button";
import {formatearDinero, calcularTotalPagar} from "./utils"

const App = () => {
  const [ cantidad, setCantidad ] = useState(2000000);
  const [ meses, setMeses] = useState(6);
  const [total, setTotal] =useState(0);
  const [ pago, setPago] =useState(0);

  useEffect(() => {
      setTotal(calcularTotalPagar(cantidad, meses));
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(total / meses);
}, [total])

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
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
        {formatearDinero(cantidad)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'> Plazo</span> a pagar
      </h2>
      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value= {meses}
        onChange={ e => setMeses(+e.target.value)}
      >
        <option value='6'>6 Meses</option>
        <option value='12'>12 Meses</option>
        <option value='24'>24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen de <span className='text-indigo-600'> Pagos</span>
        </h2>
        <p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Mensualidades</p>
      </div>
      




    </div>
  );
}
 
export default App;