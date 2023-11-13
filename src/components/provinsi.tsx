interface Province {
    id: number
    name: string
}

export default function Provinsi(props: Province) {
  return (

    <option value={props.id}>
        {props.name}
    </option>

  )
}
