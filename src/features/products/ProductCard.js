import { Card, CardImg,CardImgOverlay,CardTitle} from "reactstrap";
import ProductDetails from "./ProductDetails";




const ProductCard = ({product}) =>{
  const {image, name} = product;
    return (
        <Card>
              <CardImg 
                width='100%'
                src={image}
                alt={name}
            /> 
                <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
                <button
  name="Add to cart"
  className="btn btn-success"
  onClick={ProductDetails}
  href ="#"

  
>
 Add To Cart
</button>
        </Card>
    );

};

export default ProductCard;