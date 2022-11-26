import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
const Edad = () => {
  let actual = new Date();// obtiene la fecha actual, incluida la hora minutos y segundos
    let diaActual = actual.getDate();
    let mesActual = actual.getMonth() + 1;
    let añoActual = actual.getFullYear();
    const [año, setAño]=useState(0)
    const [mes,setMes]=useState(0)
    const [dia,setDia]=useState(0)
    const [fechaNacimiento, setFechaNacimiento] = useState(0)

    const handleFecha = (e) => {
        setFechaNacimiento(e.target.value)
        //console.log(fechaNacimiento)
    }

    const calcular = (e) => {
        e.preventDefault();
        let array = fechaNacimiento.split('-', 3);
        array = array.map(Number)
        console.log([añoActual, mesActual, diaActual]);
        console.log(array)
        setAño ( añoActual - array[0]);
        let añoN =añoActual - array[0]
        if (mesActual < array[1]) {
            setAño(añoN-1);
        } else if (mesActual === array[1]) {
            if (diaActual < array[2]) {
                setAño(añoN-1);
            }
        }
        setMes (0)
        if (mesActual > array[1]) {
            setMes ( (mesActual - array[1])-1 )
        }
        else if (mesActual < array[1]) {
            setMes ( 11 - (mesActual - array[1]))
        }
        else if (mesActual === array[1] && array[2] > diaActual) {
            setMes ( 11);
        }
        
        setDia(0)
        if (diaActual > array[2]){
            setDia  (diaActual - array[2]);
        }
        else if (diaActual < array[2]) {
            let ultimoDiaMes = new Date(añoActual, mesActual, 0);
            setDia (ultimoDiaMes.getDate() - (array[2] - diaActual));
            
        }
        if (mesActual>array[1] && diaActual>=array[2]){
            setMes((mesActual - array[1]))
        }

        console.log(año);
        console.log(mes);
        console.log(dia);
    }

    return (
        <div align='center'>
          <br /> <br />
            <div className='edadC'>
                <Stack component="form" noValidate spacing={3} display='block'>
                    <TextField
                        className='input-edad'
                        id="date"
                        label=""
                        type="date"
                        defaultValue="2022-11-25"
                        sx={{ width: 220, margin: ' 5px 15px 5px 5px' }}
                        onChange={handleFecha}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <button className='boton-calcular' variant='contained' onClick={calcular}>Calcular</button>
                </Stack>
            </div>
            <div className='contCua'>
                <div  className='cuadritos'>
                    <p >{año}</p>
                    <p >Años</p>
                </div>
                <div  className='cuadritos'>
                    <p >{mes}</p>
                    <p >Meses</p>
                </div>
                <div  className='cuadritos'>
                    <p >{dia}</p>
                    <p >Dias</p>
                </div>
            </div>
        </div>
    );
}

export default Edad