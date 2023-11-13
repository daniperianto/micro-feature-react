import React, {useState, useEffect} from "react"
import axios from "axios"
import Provinsi from "../components/provinsi"
import Kabupaten from "./wilayahkabupaten"

export default function Wilayah() {
    const [dataProvince, setDataProvince] = useState()
    const [dataRegency, setDataRegency] = useState()
    const [dataDistrict, setDataDistrict] = useState()
    const [dataVillage, setDataVillage] = useState()
    useEffect( () => {
        axios.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
        .then(res => {
            setDataProvince(res.data)
        })
        // .then(res => setDataProvince(res))
        .catch(res => console.log("error"))
    }, [])

    const [provinsi, setProvinsi] = useState()
    const provinsiChange = (e) => {
        setProvinsi(e.target.value)
        regency(e.target.value)
    }
    console.log(provinsi)


    function regency(value: any) {
            axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${value}.json`)
            .then(res => {
                setDataRegency(res.data)
            })
            .catch(res => console.log("error"))
        
        console.log(dataRegency)
    }

    const [kabupaten, setKabupaten] = useState()
    const kabupatenChange = (e) => {
        setKabupaten(e.target.value)
        district(e.target.value)
    }
    console.log(kabupaten)


    function district(value: any) {
        axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${value}.json`)
        .then(res => {
            setDataDistrict(res.data)
        })
        .catch(res => console.log("error"))
    
        console.log(dataRegency)
    }

    const [kecamatan, setKecamatan] = useState()
    const kecamatanChange = (e) => {
        setKecamatan(e.target.value)
        village(e.target.value)
    }
    console.log(kecamatan)


    function village(value: any) {
        axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${value}.json`)
        .then(res => {
            setDataVillage(res.data)
        })
        .catch(res => console.log("error"))
    
        console.log(dataRegency)
    }

    const [kelurahan, setKelurahan] = useState()
    const kelurahanChange = (e) => {
        setKelurahan(e.target.value)
    }
    console.log(kecamatan)



        

    return (
        <div className="container py-5 mx-auto justify-content-center">
        <div className="w-75 mx-auto">
        <h1 className="text-center mb-2">Wilayah Indonesia</h1>

        <div className="mb-3">
        <label class="fw-semibold fs-4" for="provinsi">Pilih Provinsi</label>
        <select value={provinsi} onChange={provinsiChange} id="provinsi" className="bg-white w-100 p-2 rounded fs-5 border border-black shadow-sm">
            <option value="" hidden></option>
            {
                dataProvince?.map( (data: any, index: any) => (
                    <Provinsi id={data.id} name={data.name} />
                    ))
                }
        </select>
        </div>
        
        {
            provinsi > 0 &&
            <div className="mb-3">
            <label class="fw-semibold fs-4" for="kabupaten">Pilih Kabupaten/Kota</label>
            <select value={kabupaten} onChange={kabupatenChange} id="kabupaten" className="bg-white w-100 p-2 rounded fs-5 border border-black shadow-sm">
                <option value="" hidden></option>
                {
                    dataRegency?.map( (data: any, index: any) => (
                        <Provinsi id={data.id} name={data.name} />
                        ))
                }
            </select>
            </div>
        }

        {
            kabupaten > 0 &&
            <div className="mb-3">
            <label class="fw-semibold fs-4" for="kecamatan">Pilih Kecamatan</label>
            <select value={kecamatan} onChange={kecamatanChange} id="kecamatan" className="bg-white w-100 p-2 rounded fs-5 border border-black shadow-sm">
                <option value="" hidden></option>
                { 
                    dataDistrict?.map( (data: any, index: any) => (
                        <Provinsi id={data.id} name={data.name} />
                        ))
                    }
            </select>
            </div>
        }

        {
            kecamatan > 0 &&
            <div className="mb-3">
            <label class="fw-semibold fs-4" for="kelurahan">Pilih Kelurahan/Desa</label>
            <select value={kelurahan} onChange={kelurahanChange} id="kelurahan" className="bg-white w-100 p-2 rounded fs-5 border border-black shadow-sm">
                <option value="" hidden></option>
                {
                    dataVillage?.map( (data: any, index: any) => (
                        <Provinsi id={data.id} name={data.name} />
                        ))
                    }
            </select>
            </div>
        }

        </div>
        </div>
    )
}
