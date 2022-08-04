import React from "react";
import Header from "./Components/Header";
import youtubeApiSearch from "youtube-api-search";

export default function App() {
const API_KEY = 'AIzaSyAnWIoN061xTd_Zuls_daXKAqBfRusYjaY';
const [val, setVal] = React.useState([])
// React.useEffect(()=> {
//   youtubeApiSearch({key: API_KEY, term: "pbd"}, data => setVal([data[0]]))

// }, [])

const [valInput, setValInput] = React.useState('')

const handleChange = (event ) =>{
  setValInput(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  youtubeApiSearch({key: API_KEY, term: valInput}, data => setVal([data[0]]))
  setValInput("")
} 
function html (text) {
  const doc = document.createElement("h2")
  doc.innerHTML = text
  return doc.innerText
}
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <input style={{padding: 10, margin: 15, border: "2px solid lightgray", borderRadius: "5px", width: "30%"}} type="text" value={valInput} onChange={handleChange} />
      </form>
    {val.map((v, index) => (<div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2 style={{textAlign: "center"}}>{html(v.snippet.title)}</h2>
    <iframe style={{width: "60vw", height: "60vh"}} src= {`https://youtube.com/embed/${v.id.videoId}`} />
    <br/>
    </div>))}
    <br/>
    </>
  );
}
