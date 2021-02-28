import Image from "./assets/adidas.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="sneaker">
            <div className="circle"></div>
            <img src={Image} alt="adidas" />
          </div>
          <div className="info">
            <h1 className="title">Adidas ZX</h1>
            <h3>
              FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.
            </h3>
            <div className="sizes">
              <button>39</button>
              <button>40</button>
              <button className="active">42</button>
              <button>44</button>
            </div>
            <div className="purchase">
              <button>Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
