import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import { Form, Button, Card } from "react-bootstrap";

const FormDepens = () => {
  const [depense, setDepense] = useState({
    name: "",
    value: 0,
  });
  const [isErrorMessageDisplayed, setErrorMessageDisplayState] = useState(
    false
  );

  useEffect(
    function () {
      if (depense.name.length > 30) {
        // Si le pseudo mesure plus de 8 caractères de long
        setErrorMessageDisplayState(true); // Afficher le message d'erreur
      } else {
        setErrorMessageDisplayState(false); // Sinon ne pas l'afficher
      }
    },
    [depense.name]
  );

  function updateNameDepense(event) {
    setDepense({
      ...depense,
      name: event.target.value,
    });
  }
  function updateValueDepense(event) {
    setDepense({
      ...depense,
      value: event.target.value,
    });
  }

  return (
    <>
      <Card.Text
        className="Section-Form-Dep"
        style={{ backgroundColor: "#FA8072" }}
      >
        <Card.Header>Formulaire d'ajout de dépenses</Card.Header>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="name">Ajouter une dépense:</Form.Label>
            <Form.Control
              className=""
              type="text"
              placeholder="Entrez une depense"
              name="name"
              id="name"
              value={depense.name || ""}
              onChange={updateNameDepense}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label htmlFor="value">Valeur</Form.Label>
            <Form.Control
              className=""
              type="text"
              name="value"
              id="value"
              value={depense.value || 0}
              onChange={updateValueDepense}
              type="text"
              placeholder="Entrez sa valeur"
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Text>
      <p>
        j'ai dépensé <strong>{depense.name}</strong> qui a pour valeur :{" "}
        <strong>{depense.value}</strong>
      </p>
    </>
  );
};
export default FormDepens;
