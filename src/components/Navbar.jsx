import React, { useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Button variant="dark" className="px-3 py-2">
          <Link to="/"><h2>Home</h2></Link>
        </Button>
        <Button variant="light" className="px-3 py-2">
          <Link to="/cart"><h4>Cart</h4></Link>
          <span className="badge bg-primary rounded-pill m-1">
            {totalQuantity}
          </span>
        </Button>
      </Container>
    </Navbar>
  );
}
