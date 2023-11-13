import React, {useState, useEffect} from "react"
import axios from "axios"
import Provinsi from "../components/provinsi"

export default function Kabupaten(provinsi: any) {
    const [dataRegency, setDataRegency] = useState()
    useEffect( () => {
        axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsi}.json`)
        .then(res => {
            setDataRegency(res.data)
        })
        .catch(res => console.log("error"))
    }, [])
    console.log(dataRegency)

    const [kabupaten, setKabupaten] = useState()
    const kabupatenChange = (e) => {
        setKabupaten(e.target.value)
    }
    console.log(kabupaten)
    



        

    return (
        <>
        <select value={kabupaten} onChange={kabupatenChange}>
            <option value="" hidden></option>
            {
                dataProvince?.map( (data: any, index: any) => (
                    <Provinsi id={data.id} name={data.name} />
                    ))
            }
        </select>
        </>
    )
}
