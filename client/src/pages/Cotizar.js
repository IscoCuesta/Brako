import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Accordion, Card, ButtonGroup, Button } from 'react-bootstrap';

class Books extends Component {
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
        {titulo: "accesorios",
        opciones: ['chimenea', 'maceta', 'lisa', 'personalizada'],
        Num: 2}
      ]},
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

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
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Accordion defaultActiveKey="0">

              {this.state.mesa.preguntas.map(pregunta =>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={pregunta.Num}>
                    {pregunta.titulo}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={pregunta.Num}>
                    <Card.Body>
                      <ButtonGroup size="lg" vertical>
                        {pregunta.opciones.map(opcion => 
                          <Button>{opcion}</Button>
                        )}
                      </ButtonGroup>
                    {pregunta.opciones}
                    
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                )}
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
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

export default Books;
