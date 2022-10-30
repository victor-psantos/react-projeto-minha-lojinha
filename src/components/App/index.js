import './App.css';
import {useState} from 'react';
import Products from '../Products'

function App() {
  const [total, setTotal] = useState(0);
  return (
    <div>
      <div className="App">
        <b>Total da compra: </b> 
        R$ <span>{total.toFixed(2)}</span>      
        <Products
          updateTotalPrice = {(price) => setTotal(total + price)}
        />   
      </div>
    </div>
  );
}

export default App;
