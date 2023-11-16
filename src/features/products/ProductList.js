import {Col,Row} from 'reactstrap';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../../app/shared/PRODUCTS';

const ProductList = () =>{
    return(
        <Row className='ms-auto'>
            {PRODUCTS.map((product) => {
                        return (
                            <Col md='5' className='m-4' key={product.id}>
                                <ProductCard product={product} />
                            </Col>
                        );
                    })}
        </Row>
    );

}
export default ProductList;