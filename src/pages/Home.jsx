import MicroService from "../assets/js/micro-feature"
import Card from "./Card"

export default function Home() {
    const microFeature = [
        new MicroService("Word Scramble", "/word-scramble", "find the actual word!", "/src/assets/image/word-scramble.jpg"),
        new MicroService("Salary Calculator", "/salary-calculator", "let you calculate your salary", "/src/assets/image/salary-calculator.jpg")
    ]
    
    return (
        <div>
            <div className="d-flex flex-row m-5 justify-content-center">
                {
                    microFeature.map( (feature) => (
                        <Card name={feature.name} address={feature.address} description={feature.description} image={feature.image} />
                        ))
                    }     
            </div>
        </div>
    )
}