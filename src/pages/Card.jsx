
export default function Card(props) {
    return (
        <div className="m-4 text-center pt-3" style={{width: "300px", height: "200px", border: "solid"}}>
            <a className="text-decoration-none fs-3 mb-5 fw-bolder text-black" href={props.address}>{props.name}</a>
            <p className="mt-auto mb-2">{props.description}</p>
            <div className="m-auto" style={{width: "100px"}}>
                <img className="img-fluid" src={props.image} alt={props.name}/>
            </div>
        </div>
    )
}