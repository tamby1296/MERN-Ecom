import { Row, Col } from "react-bootstrap";

import Product from "../../components/Products";
import { useGetProductsQuery } from "../../slices/product.slice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <Loader />;
  if (isError && error)
    return (
      <Message variant="danger">
        {error?.data?.message ?? "An error has occured"}
      </Message>
    );
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
