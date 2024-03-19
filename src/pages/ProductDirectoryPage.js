import { Container, Row, Col, Button } from 'reactstrap';
import ProductDetails from '../features/products/ProductDetails';
import ProductList from '../features/products/ProductList';
import { selectRandomProduct } from '../features/products/ProductSlice';

const ProductDirectoryPage = () => {
    const selectedProduct = selectRandomProduct();
    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <ProductList />
                </Col>
                <Col sm='7' md='5'>
                    <ProductDetails product={selectedProduct} />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDirectoryPage;