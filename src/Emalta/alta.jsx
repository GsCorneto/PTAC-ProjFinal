import { useState } from "react";
import { Link } from "react-router-dom";
import './alta.css' 
import Card from "../Componentes/Card";

export default function Alta(){
  const listaVideo = JSON.parse(localStorage.getItem("Lista")) || [];
  

    return(
        <div>
        <header> 
         <h1>Galeria de Vídeos MANEIROS</h1>
        </header>

        <nav>
    <ul>
       <li>VÍDEOS DAORINHA</li>
       <li>Todas as quinta-feiras</li>
       <li>Mande-me seu vídeo supimpa</li>
       <li>Meu nome é: Ari lelek</li>      
   </ul>
</nav>

           <main>
             <Link to="/todo">Inserir vídeo Bacanudo</Link>
           </main>
           {listaVideo.slice(-4).map((video) => <Card video = {video}/>)}
             
    <footer>Esses vídeos vão estourar a boca do balão</footer>
     </div>
     );
}