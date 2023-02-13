import { IProduct } from "./models";

interface ProductProps{
    product: IProduct
}

export function Products({product}: ProductProps){
    return(
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price} руб</p>
        </div>
    )
}