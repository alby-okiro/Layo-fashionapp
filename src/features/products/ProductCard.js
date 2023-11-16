import { Card, CardImg,CardImgOverlay,CardTitle} from "reactstrap";


const ProductCard = (props) =>{
  
    return (
        <Card>
              <CardImg 
                width='50%'
                src={props.product.image}
                alt={props.product.name}
            /> 
                <CardImgOverlay>
                <CardTitle>{props.product.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );

};

export default ProductCard;