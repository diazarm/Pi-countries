import { GET_COUNTRIES } from "./actions-types";
import axios from "axios";

const getCountries = () => {
    return async(dispatch) =>{
        try {
            const response = await axios.get("https://localhost:3001/countries/")
            const apiData = await response.data;
            dispatch({
                type: GET_COUNTRIES,
                payload: apiData
            });
        } catch (error) {
            console.log(error);    
        }
        
    }
}

export default getCountries;