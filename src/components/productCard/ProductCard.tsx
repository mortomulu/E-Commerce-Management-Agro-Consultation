import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Product } from "@/types/product";

interface CardDataProps {
    todo : Product
}

const ProductCard : React.FC<CardDataProps> = ({
    todo,
}) => {
    return (
        <div className="card bg-base-100 shadow-xl p-0">
           
            <img className="rounded-t-lg max-h-40 object-cover max-w-full" src={todo.url_image} alt="Shoes" />
           
          <div className="card-body">
            <h2 className="card-title flex justify-between truncate">
            {todo.product_name}
            <FaRegHeart />
            </h2>
            <p>$ {todo.price}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
    )
}

export default ProductCard