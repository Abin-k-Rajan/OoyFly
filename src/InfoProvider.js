import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api_url } from "./common";



const StationContext = createContext({
    stations: null,
    setStations: () => {}
})

export const useStation = () => useContext(StationContext)


const StationProvider = ({children}) => {
    const [stations, setStations] = useState([])

    useEffect(() => {
        axios.get(`${api_url}/airport/get-aiports`)
        .then(res => {
            setStations(res.data)
        }).catch(err => {
            console.log(err)
        }) 
    }, [])

    return (
        <StationContext.Provider value={{ stations, setStations }}>
            {children}
        </StationContext.Provider>
    );
}

export default StationProvider;