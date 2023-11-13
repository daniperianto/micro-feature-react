import Card from "../components/card";
import React, {useState, useEffect} from "react";

export default function LandingPage() {
    const [data, setData] = useState()
    
    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
            data?.map((data: any, index: any) => (
                <Card title={data.title} image={data.image} description={data.description}/>
            ))
        }
        </>
    )
}