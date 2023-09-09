import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Button } from "react-bootstrap";

export default function App() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  return (
    <div className="row m-4">
      {items.map((item) => (
        <div className="col-md-3  ml-5 mt-4" key={item.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={item.img} alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Price: ₹{item.price}</p>
              <p className="card-text">Quantity: {item.quantity}</p>
              <Button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
