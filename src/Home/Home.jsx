import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css' 
import Card from "../Componentes/Card";

export default function Home(){
  const listaVideo = JSON.parse(localStorage.getItem("Lista")) || [];
    return(
        <div>
        <header> 
         <h1>Forúm Gato Brigão</h1>
        </header>

        <nav>
    <ul>
       <li>Vídeos de Gatos Lutadores</li>
       <li>Todas as terças-feiras</li>
       <li>Envie seu gato brigão</li>
       <li>GATOS DO FIGHT</li>      
   </ul>
</nav>

           <main>
             <Link to="/todo">Add Vídeo de gato brigão</Link>
           </main>
           {listaVideo.map((video) => <Card video = {video}/>)}
             
    <footer>Tenha uma boa experiência com gatos</footer>
     </div>
     );
}