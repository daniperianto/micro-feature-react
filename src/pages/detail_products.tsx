import Card from "../components/card";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom"

export default function DetailProduct() {
    const id = useParam()
    const [data, setData] = useState()
    
    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
        .catch(res => console.log("error"))
    }, []) 

    console.log(data)
    
    return (
        <>
        {
            
            <Card title={data.title} image={data.image} description={data.description}/>
            
        }
        </>
    )
}