import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
//2da forma

function App() {

  const [state, setState] = useState(
    [
      { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
      { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
      { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" }
    ])
  const [songsActive, setsongsActive] = useState(null); //-
  let nombreRef = useRef(null); //captura el valor - hace referencia a elementos del DOM, incluso class
  

  // const apiUrl = "https://assets.breatheco.de/apis/sound/" // 
  const setSingleSong = (x, i) => {
    nombreRef.src = `https://assets.breatheco.de/apis/sound/${x}`;
    setsongsActive(i) //-
  }
  const fplay = () => {
    if (nombreRef !== null)
    nombreRef.play();
  }
  const pause = () => {
    nombreRef.pause();
  }
  const adelantar = () => {
    let position= songsActive !== null ? songsActive == state.length - 1 ? 0 : songsActive + 1 : 0;
    setSingleSong(state[position].url, position)
  }
  const atras = () => {
    let position= songsActive !== null ? songsActive == 0 ? state.length -1 : songsActive -1 : 0; 
    setSingleSong(state[position].url, position);
    fplay();

  }




  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">

          <ol >
            {
              state.length > 0 &&
              state.map((valor, j) => 
              // return <li key={valor.id} className={"list-group-item list-group-item"} onClick={() => (nombreRef.src=apiUrl+valor.url) }</li>} // 
              {
                return <li key={valor.id} className={"list-group-item list-group-item" + (songsActive === j)} onClick={() => setSingleSong(valor.url, j)} >{valor.name}</li> //-
                 
              })

            }
          </ol>
          <div className="row">
            <div className="col-md-8 mx-auto text-center">

              <button className="btn-sm" onClick={atras}id="boton"><i class="fas fa-arrow-circle-left"></i></button>
              <button className="btn-sm" onClick={pause}><i class="far fa-pause-circle"></i></button>
              <button className="btn-sm" onClick={fplay}><i class="far fa-play-circle"></i></button>
              <button className="btn-sm" onClick={adelantar}><i class="fas fa-arrow-circle-right"></i></button>
              <audio ref={r => nombreRef = r} autoPlay controls/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
