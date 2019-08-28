import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Carrito extends Component {
  state = {
    Carrito: [],
  };

  componentDidMount() {
    this.loadCart();
    
  }

  loadCart = () => {
    let actual = JSON.parse(localStorage.getItem("BCC"))
    console.log(actual);
    this.setState({
      Carrito: actual
    })
  }

  delete = Num => {
    let nuevo = this.state.Carrito.filter(prod => prod.Num !== Num);
    this.setState({
      Carrito: nuevo
    })
    localStorage.setItem("BCC", JSON.stringify(nuevo));
  }

  render() {
    return (
      <div>
        <Nav carrito={this.state.Carrito.length} />
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Carrito de compras</h1>
              </Jumbotron>
              {this.state.Carrito.length ? (
                <List>
                  {this.state.Carrito.map(Item => (
                    <ListItem key={Item.Num}>
                        <strong>
                          {Item.tipo} con: {Item.seleccion.map(prod =>  " -> " +prod)}
                        </strong>
                        <DeleteBtn onClick={() => this.delete(Item.Num)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>Uups! sin articulos en el carrito</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Carrito;
