import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "./context/Context";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Rating from './Rating'
import { useEffect, useState } from "react";
import './styles/cart.css'
import { Link} from "react-router-dom";

const Cart = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();

      const [total, setTotal] = useState();

      useEffect(() => {
        setTotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);

    return (
        <>
        
        <div className="card" id="checkoutcart">
    <div className="row">
    

        <div className="col-md-8 cart">
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h4><b>Panier</b></h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">({cart.length})articles</div>
                </div>
            </div>
            {cart.map((prod) => (
            <div className="row border-top border-bottom" key={prod.id}>
                <div className="row main align-items-center">
                    <div className="col-2"><img src={prod.image} alt={prod.name} fluid/></div>
                    <div className="col">
                        <div className="row text-muted">{prod.name}</div>
                        <div className="row">						<Rating rating={prod.ratings} /></div>
                    </div>
                    <div className="col " >   
                    <Form.Control
                    as="select"
                    size="lg"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGER_LA_QTÉ_DU_PANIER",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))} 
                   
                  </Form.Control> </div>
                    <div className="col">  {prod.price} €  <span className="close"> <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "RETIRER_DU_PANIER",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="25px" />
                  </Button></span></div>
                </div>
            </div>  ))}
          
            <div className="back-to-shop"><BsArrowLeftShort/> <Link to="/" ><span className="text-muted">retour à la boutique</span></Link></div>
        </div>
        <div className="col-md-4 summary">
            <div>
                <h5><b>Récapitulatif</b></h5>
            </div>
            <hr/>
            <div className="row">
                <div className="col" >articles ({cart.length})</div>
                <div className="col text-right"> {total} €</div>
            </div>
            <form>
                <p>EXPÉDITION</p> <select>
                    <option className="text-muted">Livraison standard -- 5.00€</option>
                </select>
                <p>CODE PROMO</p> <input id="code" placeholder="Entrez votre code PROMO" />
            </form>
            <div className="row" >
                <div className="col">PRIX TOTAL </div>
                <div className="col text-right"> {total} €</div>
            </div> <button disabled={cart.length === 0}className="btn">PAYEMENT</button>
        </div>
    </div>
</div>

        {/* <div className="home__cart">
      <div className="productContainer__cart">
      <ListGroup>
      {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}> {prod.price} €</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGER_LA_QTÉ_DU_PANIER",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "RETIRER_DU_PANIER",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="25px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}

      </ListGroup>
      <div className="filters__cart summary">
        <span className="title">Récapitulatif ({cart.length}) </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total:  {total} €</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
    </div>
   */}

  </>
  );
};

export default Cart
