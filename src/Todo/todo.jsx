import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './todo.css' 


export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
   const [nome, setNome] = useState("");
   const [lista, setLista] = useState((listaLocalStorage));
   const [inscricao, setInscricao] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.inscricao + 1 || 1);
   const [link, setLink] = useState("");
   const [desc, setDesc] = useState("");
   useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) },[lista]);

   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, { //... serve para adicionar segmentos 
        nome:nome, inscricao:inscricao, link:link, desc:desc
    }]);
    setInscricao(inscricao + 1)
    alert("Inscrito no torneio!")
   };

         
     return (
        <div>
            <header>
            <h1>Inscrição do Vídeo</h1>
            </header>
            <div class="container">
            <form onSubmit={salvar}>

                <p>Nome: </p><input type="text" onChange={(e)=>{setNome(e.target.value)}}></input>
                <br/>
                 <p>Link: </p><input type="text" onChange={(a)=>{setLink(a.target.value)}}></input>
                <br/>
                 <p>Descrição: </p><input type="text" onChange={(x)=>{setDesc(x.target.value)}}></input>
             <button>Adicionar</button>

           </form>
            </div>
      
           <br/>
           {lista.map((video)=>
             <div>
               <ul key={video.inscricao}>
                <h2>Nome: {video.nome}</h2>
                <h2>Link: {video.link}</h2>
                <h4>Descrição: {video.desc}</h4>

                <iframe
                 width= "300"
                 height="200"
                 src={`https://www.youtube.com/embed/${video.link.slice(17)}`}
                 title= "Vídeo"
                 frameBorder={0}
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
                ></iframe>
                

               
                <Link to = {`/detalhe/${video.inscricao}`}>
                  <li>{video.nome}</li>
                </Link>
                </ul>
             </div>
           )}

           <footer>Gatos são fofos e violentos   <p>Retornar ao<Link to="/">Lobby</Link></p></footer>
        </div>
    );
}