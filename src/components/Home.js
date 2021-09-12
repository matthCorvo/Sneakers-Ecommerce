import { CartState } from "./context/Context";
import Filters from "./Filters";
import SingleProducts from "./SingleProducts";
import Hero from './Hero';
import { Container, Row } from "react-bootstrap";


const Home = () => {

  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
    return (
        <div className="overflow-hidden " style={{backgroundColor:'#F6F6F6'}}>
          <Hero/>

      <Filters/>
      <Container fluid  >
      <Row  >
      {transformProducts().map((prod) => (
                 <SingleProducts prod={prod} key={prod.id} />
        ))}
  </Row>
      </Container>

    </div>
    )
}

export default Home
