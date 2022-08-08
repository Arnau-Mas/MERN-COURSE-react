import {useParams} from "react-router-dom";
export function Arnau(){
    const {cognom} = useParams()
    return (
        <h1>Arnau {cognom}</h1>
    )
}