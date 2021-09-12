import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Dropdown,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CartState } from "./context/Context";
import "./styles/header.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import React,{ useState } from "react";
import MyVerticallyCenteredModal from "./Login";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();



  const [modalShow, setModalShow] = React.useState(false);


  
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80, position: 'sticky',top: 0}}>
        <Navbar.Brand>
          <Link to="/">NIKE OUTLET</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search" style={{ marginRight:30}}>
           <form>
	<input 
  type="search" 
  placeholder="Rechercher ..."
  className="m-auto"
  aria-label="Search"
    onChange={(e) => {
      productDispatch({
        type: "FILTER_BY_SEARCH",
        payload: e.target.value,
      });
    }}
  />        
   
</form>
          </Navbar.Text>
        )}
        <Nav className='nav-menu'>

         <NavLink 
            to='/'    className='nav-links' onClick={() => setModalShow(true)}>
 <HiUser color="white" fontSize="25px" style={{ marginRight:10, marginBottom:10}} /> 
  <span>Mon compte</span>
            </NavLink>
             {/* The Modal */}
      
             <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          {/* <NavLink 
             className='nav-links'
            to='/' >
 <FaMapMarkerAlt color="white" fontSize="25px" style={{ marginRight:10, marginBottom:10}} /> 
 <span> Nos magasins</span>
            </NavLink>  */}

          <Dropdown alignRight>
            <Dropdown.Toggle variant="danger">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span> {prod.price.split(".")[0]} € </span>
                      </div>
                      <AiFillDelete
                      fontSize="25px"
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() =>
                        dispatch({
                          type: "RETIRER_DU_PANIER",
                          payload: prod,
                        })
                      }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                    Aller au panier
                    </Button>
                  </Link>
                </>
            ) : ( 
            <span style={{ padding: 10 }}>Il n'y a aucun article dans votre panier.</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
};

export default Header;