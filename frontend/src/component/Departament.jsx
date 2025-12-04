import {useState, useEffect} from 'react';
import { getDepartamentService } from '../service/departamentos';
import './DepartamentStyle.css'

export function GetDepartament() {
    const [departaments, setDepartaments] = useState([]);

    useEffect(() => {
        async function load() {
            try{
                const data = await getDepartamentService();
                setDepartaments(data)
            }
            catch (error){
                console.error("Error cargando departamentos", error)
            }
        }
        load()
    }, [])
    

    return( 
        <div>
            <h2>Departamentos</h2>
            
            {departaments.length === 0 && <p>Cargando...</p>}

            {departaments.map((departamento) => (
            <div className='deptoCard' key={departamento.id} >
                <h3>{departamento.street}</h3>
                <ul> 
                    <li>piso: {departamento.floorNumber}</li> 
                    <li>letra: {departamento.letter}</li>
                    <li>alias: {departamento.alias}</li>
                    <li>metros cuadrados: {departamento.squareMeters}</li>
                </ul>
            </div>))}
            
        </div>
    );
}