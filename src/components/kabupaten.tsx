interface Regency {
    id: number
    name: string
}

export default function Kabupaten(props: Regency) {
  return (

    <option value={props.id}>
        {props.name}
    </option>

  )
}
