// import Link from "react-router-dom"

export default function Card({video}){
    console.log(video)
    const videoId = video.link.slice(17);
    return(<div>
        <iframe
        width= "300"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        title= "Vídeo"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
       ></iframe>
         <h5>{video.nome}</h5>
         <p></p>
         </div>
    )
}