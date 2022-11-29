import React, { useState } from 'react'
import { Slider, Box } from '@mui/material';
const Imc = ( ) => {
  const [peso,setPeso] = useState(65);
  const [estatura,setEstatura] = useState(162);
  let valorImcIn = 24
  const calculoImc = () =>{
    let estaturaMetros = estatura/100
    valorImcIn = peso/(estaturaMetros*estaturaMetros);
    valorImcIn = (valorImcIn.toFixed(1))
    if (valorImcIn<18.5){
      return(
        <div>
          <br/>
          {valorImcIn}
          <p style={{color:'blue'}}>Bajo peso</p>  <br/>
        </div>
      )
    }else if (valorImcIn>=18.5 && valorImcIn<25) {
      return(
        <div>
          <br/>
          {valorImcIn}
          <p style={{color:'green'}}>Normal</p> <br/>
        </div>
      )
    }else if(valorImcIn>=25 && valorImcIn<30 ){
      return(
        <div>
          <br/>
          {valorImcIn}
          <p style={{color:'yellow'}}>Sobrepeso</p> <br/>
        </div>
      )
    }else if(valorImcIn>=30 && valorImcIn<35 ){
      return(
        <div>
          <br/>
          {valorImcIn}
          <p style={{color:'red'}}>Obesidad grado 1</p> <br/>
        </div>
      )
    }else if(valorImcIn>=35 && valorImcIn<40 ){
      return(
        <div>
          <br/>
          {valorImcIn}
          <p style={{color:'red'}}>Obesidad grado 2</p> <br/>
        </div>
      )
    }else if(valorImcIn>40 ){
      return(
        <div>
          <br/>
          {valorImcIn}
          <p style={{color:'red'}}>Obesidad grado 3</p> <br/>
        </div>
      )
    }

}


const handlePeso = (e)=>{
  setPeso(e.target.value)
  calculoImc()
}
const handleEstatura = (e)=>{
  setEstatura(e.target.value)
  calculoImc()
}

return (
  <div align='center'>
    <div className='card' >
      <div className='contenedor'>
        <Box >
          Peso(Kg)
          <Slider

            onChange= {handlePeso}
            defaultValue={65}
            step={1}
            min={20}
            max={150}
            valueLabelDisplay="auto"
          />
        </Box>
        <br />
        <Box>
          Estatura(cm)
          <Slider
            valueLabelDisplay="auto"
            onChange= {handleEstatura}
            defaultValue={165}
            step={1}
            min={100}
            max={230}
          />
        </Box>
        <div className='numero'>{calculoImc()} </div>
      </div>

    </div>
  </div>
)  
} 

export default Imc