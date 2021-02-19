import React, { useState, useEffect } from "react";p
import { Form, Button } from "react-bootstrap";

const FormDepens = () => {
  const [depense, setDepense] = useState({
    name: "",
    value: "",
  });
  const [isErrorMessageDisplayed, setErrorMessageDisplayState] = useState(
    false
  );

  useEffect(
    function () {
      if (depense.name.length > 30) {
        // Si le name mesure plus de 30 caractères de long
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
      <Form style={{ backgroundColor: "#FA8072" }}>
        <Form.Group controlId="formName">
          <Form.Label htmlFor="name">Ajouter une dépense:</Form.Label>
          <Form.Control
            className=""
            type="text"
            placeholder="Entrez une depense"
            name="name"
            value={depense.name || ""}
            onChange={updateNameDepense}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formValue">
          <Form.Label htmlFor="value">Valeur</Form.Label>
          <Form.Control
            className=""
            type="text"
            name="value"
            value={depense.value || ""}
            onChange={updateValueDepense}
            type="text"
            placeholder="Entrez sa valeur"
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        j'ai dépensé <strong>{depense.name}</strong> qui a pour valeur :{" "}
        <strong>{depense.value}</strong> €
      </p>
    </>
  );
};
export default FormDepens;
