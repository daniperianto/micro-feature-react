interface Product {
    title: string
    image: string
    description: string
}


export default function Card(props: Product) {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  )
}
