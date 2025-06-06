import { Row, Col } from "react-bootstrap";

import Product from "../../components/Products";
import { useGetProductsQuery } from "../../slices/product.slice";

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <>Loading...</>;
  if (isError && error) return <div>{error?.data?.message}</div>;
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
