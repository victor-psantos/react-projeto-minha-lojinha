import "./Product.css"
import {useState} from 'react';

function Product(props) {
    const [selected, setSelected] = useState(false);
    const { name, icon, price, updateTotalPrice } = props;
    const adjustedPrice = price.toFixed(2).toString().replace(".", ",");

    function checkSelected(){
        let classes = "Product";
        if (selected)
            classes = "Product selected";
        
        return classes;
    }

    function handleSelect(){
        const isSelected = !selected;
        if (isSelected)
            updateTotalPrice(price);
        else
            updateTotalPrice(price * -1)

        setSelected(isSelected);
    }
  
    return (
       
        <div className={checkSelected()} onClick={handleSelect}>
            {icon} {name} - R$ {adjustedPrice}
        </div>
       
    );
  }

  export default Product;