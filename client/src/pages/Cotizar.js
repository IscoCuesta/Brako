import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./cotizarStyle.css";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { FormBtn } from "../components/Form";
import { Accordion, Card, ButtonGroup, Button } from 'react-bootstrap';

class cotizar extends Component {
  state = {
    Carrito: [],
    mesa: {
      preguntas: [
        {titulo: "tamaño",
        opciones: ['chica', 'mediana', 'grande'],
        Num: 0},
        {titulo: "color",
        opciones: ['obscura', 'clara'],
        Num: 1},
        {titulo: "cubierta",
        opciones: ['cristal templado', 'cubierta de mortero y madera'],
        Num: 2}
      ]},
    banca: {
      preguntas: [
        {titulo: "largo",
        opciones: ['47cm', '65cm', '120cm'],
        Num: 0},
        {titulo: "color de madera",
        opciones: ['obscura', 'clara'],
        Num: 1},
        {titulo: "acabado de metal",
        opciones: ['aluminio', 'negro mate', 'negro brillante'],
        Num: 2}
      ]},
    mesaAdd: {
      preguntas: [
        {titulo: "tamaño",
        opciones: ['chica', 'mediana', 'grande'],
        Num: 0},
        {titulo: "color",
        opciones: ['obscura', 'clara'],
        Num: 1},
        {titulo: "accesorios",
        opciones: ['chimenea', 'maceta', 'lisa', 'personalizada'],
        Num: 2}
      ]},
    accesorios: {
      preguntas: [
        {titulo: "macetas",
        opciones: ['circular', 'rectangular', 'tubular'],
        Num: 0},
        {titulo: "lamparas",
        opciones: ['circular', 'tubular'],
        Num: 1},
        {titulo: "accesorios",
        opciones: ['chimenea', 'maceta', 'lisa', 'personalizada'],
        Num: 2}
      ]},
    producto: "",
    seleccion: [],
    synopsis: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  loadBooks = () => {
    // API.getBooks()
    //   .then(res =>
    //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //   )
    //   .catch(err => console.log(err));
  };

  deleteBook = id => {
    // API.deleteBook(id)
    //   .then(res => this.loadBooks())
    //   .catch(err => console.log(err));
  };

  cambio = grupo => {
    console.log(grupo);
    this.setState({
      producto: grupo,
      seleccion: []      
    })
  }
  cambiobtn = select => {
    console.log(select);
    const sel = this.state.seleccion;
    sel[select.lugar] = select.select
    this.setState({
      seleccion: sel
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron 
              onClick={() => this.cambio("mesa")}>
              <img className="classImg" src={require("../static/mk_I.JPG")}></img>
              <FormBtn onClick={() => this.cambio("mesa")}>Mesa de Centro</FormBtn>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <img className="classImg" src={require("../static/banca.JPG")}></img>
              <FormBtn onClick={() => this.cambio("banca")}>Banca</FormBtn>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <img className="classImg" src={require("../static/mk_II.JPG")}></img>
              <FormBtn onClick={() => this.cambio("mesaAdd")}>Mesas con aditamentos</FormBtn>
            </Jumbotron>
          </Col>
          <Col size="md-3">
            <Jumbotron>
              <img className="classImg" src={require("../static/lamp.JPG")}></img>
              <FormBtn onClick={() => this.cambio("accesorios")}>Accesorios</FormBtn>
            </Jumbotron>
          </Col>

          <Col size="md-12">

              {this.state.producto === ""?
                ""
                : this.state.producto === "mesa"?
                
                <Accordion defaultActiveKey="0">
                
                  {this.state.mesa.preguntas.map(pregunta =>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey={pregunta.Num}>
                        {pregunta.titulo}
                        <span className="badge badgeSecondary">{this.state.seleccion[pregunta.Num]}</span>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={pregunta.Num}>
                        <Card.Body>
                          <ButtonGroup size="lg" vertical>
                            {pregunta.opciones.map(opcion => 
                              <Button
                              onClick={() => 
                                this.cambiobtn({select: opcion, lugar: pregunta.Num})}
                              >
                              {opcion}</Button>
                            )}
                          </ButtonGroup>
                        {pregunta.opciones}
                        
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    )}
                </Accordion>
                
                : this.state.producto === "mesaAdd"?
                
                <Accordion defaultActiveKey="0">
                
                  {this.state.mesaAdd.preguntas.map(pregunta =>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey={pregunta.Num}>
                        {pregunta.titulo}
                        <span className="badge badgeSecondary">{this.state.seleccion[pregunta.Num]}</span>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={pregunta.Num}>
                        <Card.Body>
                          <ButtonGroup size="lg" vertical>
                            {pregunta.opciones.map(opcion => 
                              <Button
                              onClick={() => 
                                this.cambiobtn({select: opcion, lugar: pregunta.Num})}
                              >
                              {opcion}</Button>
                            )}
                          </ButtonGroup>
                        {pregunta.opciones}
                        
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    )}
                </Accordion>
                : this.state.producto === "banca"?
                
                <Accordion defaultActiveKey="0">
                
                  {this.state.banca.preguntas.map(pregunta =>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey={pregunta.Num}>
                        {pregunta.titulo}
                        <span className="badge badgeSecondary">{this.state.seleccion[pregunta.Num]}</span>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={pregunta.Num}>
                        <Card.Body>
                          <ButtonGroup size="lg" vertical>
                            {pregunta.opciones.map(opcion => 
                              <Button
                              onClick={() => 
                                this.cambiobtn({select: opcion, lugar: pregunta.Num})}
                              >
                              {opcion}</Button>
                            )}
                          </ButtonGroup>
                        {pregunta.opciones}
                        
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    )}
                </Accordion>
                : this.state.producto === "accesorios"?
                
                <Accordion defaultActiveKey="0">
                
                  {this.state.accesorios.preguntas.map(pregunta =>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey={pregunta.Num}>
                        {pregunta.titulo}
                        <span className="badge badgeSecondary">{this.state.seleccion[pregunta.Num]}</span>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={pregunta.Num}>
                        <Card.Body>
                          <ButtonGroup size="lg" vertical>
                            {pregunta.opciones.map(opcion => 
                              <Button
                              onClick={() => 
                                this.cambiobtn({select: opcion, lugar: pregunta.Num})}
                              >                              
                              {opcion}</Button>
                            )}
                          </ButtonGroup>
                              
                        
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    )}
                </Accordion>
                : ""

              }

          </Col>
          <Col size="md-6 sm-12">
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default cotizar;