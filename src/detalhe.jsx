import { useParams } from "react-router-dom";
import Card from "./Componentes/Card"
export default function Detalhe(){

    const {inscricao} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"))
    const atividade = lista.filter((video) => {
         if(video.inscricao == inscricao) {
               return video;
         }
         return null
    })
    return(
      <Card video={atividade[0]}></Card>
    )
}