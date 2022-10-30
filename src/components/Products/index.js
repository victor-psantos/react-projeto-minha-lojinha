import Product from '../Product';

const products = [
    { name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
    { name: "Balão", icon: "🎈", price: 5.6 },
    { name: "Confete", icon: "🎉", price: 2.9 },
    { name: "Suco de caixinha", icon: "🧃", price: 1.9 },
    { name: "Doces diversos", icon: "🍬", price: 12.3 }
  ];

function Products(props){
    const {updateTotalPrice} = props;
    return (
        <div>
        {products.map((product) => {
          const { name, icon, price } = product;
          return (
            <Product
              name={name}
              icon={icon}
              price={price}
              updateTotalPrice={(price) => updateTotalPrice(price)}
            />
          )
        })}
      </div> 
    )
}

export default Products;