import { Button,  Form } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { RiFilterOffFill } from "react-icons/ri";
import { CartState } from "./context/Context";
import Rating from "./Rating";
import {
  
  Navbar,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import React,{ useState } from "react";

const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();
  
    // make state for rating
    const [show,setShow]=useState(true)


    return (
      <>

      <div className="page-filters-icon">

          <div className="title " >
            <FaFilter  style={{color:'white'}} onClick={() => setShow(!show)} />
             </div>
      </div> 
     <span style={{ fontSize:22,color:'red'}}>{show ? 'Masquer le filtre' : 'Afficher le filtre' }</span>  
        <div className="mx-2 ">
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search2" style={{ marginRight:30}}>
           <form>
	<input 
  type="search" 
  placeholder="Rechercher ..."
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
        </div>
    {
       show?   <div className="filters">
        <span>
          <Form.Check
            inline
            label="Prix : croissant"
            name="group1"
            type="switch"
            id={`inline-1`}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Prix : décroissant"
            name="group1"
            type="switch"
            id={`inline-2`}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Rupture de stock"
            name="group1"
            type="switch"
            id={`inline-3`}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
        </span>
     

        <span>
          <Form.Check
            inline
            label="Livraison rapide"
            name="group1"
            type="switch"
            id={`inline-4`}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
          />
        </span>

         <span >
          <Rating
          
             rating={byRating}
             onClick={(i) =>
               productDispatch({
                 type: "FILTER_BY_RATING",
                 payload: i + 1,
               })
              }style={{ cursor: "pointer" }}
          />
        </span> 
        <Button
          variant="dark" 
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
          >
          EFFACER<RiFilterOffFill style={{ fontSize:30, color:'white'}}/>
        </Button>
      </div>
     :null
    }
      </>
    )
}

export default Filters
