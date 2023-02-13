import { Products } from './product';
import { product } from './date';


function App() {
  return (
    <div className="content">
        {product.map(products => <Products product={products} key={products.id}/>)}
    </div>
      
  );
}

export default App;
