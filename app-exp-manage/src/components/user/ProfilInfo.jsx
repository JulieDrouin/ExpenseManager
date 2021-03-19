import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";

const ProfilInfo = () => {
  const [User, setUser] = useState({
    firstname: "Paulette",
    lastname: "Dujardin",
    image: "../../img/paulette.jpg",
    desc: "Je suis ruinée !",
    solde: 0,
  });
  return (
    <Jumbotron fluid style={{ fontFamily: "Oswald" }}>
      <Container>
        <Row>
          <Col>
            <Image
              src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fnetflixlife.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F04%2F163067748-gremlins.jpg-850x560.jpg"
              rounded
              width="200px"
              height="150px"
            />
          </Col>
          <Col style={{ fontFamily: "Source Sans Pro" }}>
            <h5>
              Prénom : <strong>{User.firstname}</strong>
            </h5>
            <h6>
              Nom : <strong>{User.lastname}</strong>
            </h6>
            <p>Description : {User.desc}</p>
            <p>
              Solde : <strong>{User.solde} €</strong>
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button variant="info">Ajouter un gain</Button>
          </Col>
          <Col>
            <Button variant="danger">Ajouter une dépense</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
export default ProfilInfo;
