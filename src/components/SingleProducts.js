import {  Button, Col } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from "./context/Context";
import './styles/products.css'
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';
const SingleProducts = ({prod}) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();


    return (

      
        < >

		
<Col >
		<figure className="card card-product-grid mt-5">
			<Link to="/" className="img-wrap ">
                <span className="topbar text-white">
          <span className="price product__price-tag justify-content-center" style={{ fontSize:20}}>
            {prod.price.split(".")[0]}€</span> 

				</span>
                <img variant="top"  src={prod.image} alt={prod.title} />
			</Link>
			<figcaption className="info-wrap pt-5 p-3" >
				<Link href="#" className="title_card ">{prod.name}</Link>
					<span  className="stars-active mx-3">
						<Rating rating={prod.ratings} />
					</span>
                <div className="mt-2">
          <span className="badge badge-secondary" style={{ fontSize:17}}> 
           {prod.fastDelivery ? (
                        <div>Livraison rapide</div>
                      ) : (
                        <div>Livraison en 4 jours</div>
                      )} </span>
                    
                    {cart.some((p) => p.id === prod.id) ? (
                        <Button
                        className="badge float-right"                     
   style={{fontSize:20 }}
                          
                        variant="danger"
                          onClick={() =>
                            dispatch({
                              type: "RETIRER_DU_PANIER",
                              payload: prod,
                            })
                          }
                        >
                          Retirer du panier <span style={{marginRight:2}}><MdRemoveShoppingCart /></span>
                        </Button>
                      ) : (
                        <Button
                        className="badge float-right"                     
                          style={{fontSize:20 }}
                        onClick={() =>
                            dispatch({
                              type: "AJOUTER_AU_PANIER",
                              payload: prod,
                            })
                          }
                          disabled={!prod.inStock}
                        > 
                          {!prod.inStock ? "Rupture de stock" : "Ajouter au panier"} <span style={{marginRight:2}}><FaCartArrowDown /></span>
                        </Button>
                      )}
                
                
                
                </div> 
			</figcaption>
		</figure> 
    </Col>


        {/* <Card style={{ border: 'transparent' }}>
          <Card.Img variant="top" src={prod.image} alt={prod.title} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
           <Card.Subtitle style={{ paddingBottom: 10, fontSize:20 }}>
              <span> {prod.price.split(".")[0]}€</span>
              {prod.fastDelivery ? (
                <div>Livraison rapide</div>
              ) : (
                <div>Livraison en 4 jours</div>
              )}
              <Rating rating={prod.ratings} />
            </Card.Subtitle>
             {cart.some((p) => p.id === prod.id) ? (
              <Button
              className="button button--moema button--text-thick button--text-upper button--size-s"
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "RETIRER_DU_PANIER",
                    payload: prod,
                  })
                }
              >
                Retirer du panier
              </Button>
            ) : (
              <Button
              className="button button--moema button--text-thick button--text-upper button--size-s"
                onClick={() =>
                  dispatch({
                    type: "AJOUTER_AU_PANIER",
                    payload: prod,
                  })
                }
                disabled={!prod.inStock}
              >
                {!prod.inStock ? "Rupture de stock" : "Ajouter au panier"}
              </Button>
            )}
          </Card.Body>

        </Card> */}
      </>
    )
}

export default SingleProducts
