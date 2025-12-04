import axios from 'axios'

export async function getDepartamentService() {
    try{
        const res = await axios.get("http://localhost:3000/departamento")
        return res.data
    }
    catch (error){
        console.error(error);
    }
}

